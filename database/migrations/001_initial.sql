-- Apply once to the dedicated sunil_blog database with ON_ERROR_STOP enabled.
BEGIN;
CREATE SCHEMA blog;

CREATE TABLE blog.schema_migrations (
  version text PRIMARY KEY,
  applied_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE blog.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL CHECK (email = lower(btrim(email)) AND position('@' IN email) > 1),
  display_name text NOT NULL CHECK (btrim(display_name) <> ''),
  password_hash text, -- Argon2id/bcrypt hash only; no plaintext or default credentials.
  role text NOT NULL DEFAULT 'author' CHECK (role IN ('admin', 'editor', 'author')),
  bio text NOT NULL DEFAULT '',
  avatar_url text,
  is_active boolean NOT NULL DEFAULT true,
  email_verified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (email)
);

CREATE TABLE blog.sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES blog.users(id) ON DELETE CASCADE,
  token_hash text NOT NULL UNIQUE CHECK (token_hash ~ '^[a-f0-9]{64}$'),
  expires_at timestamptz NOT NULL,
  revoked_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (expires_at > created_at)
);
CREATE INDEX sessions_user_idx ON blog.sessions(user_id);
CREATE INDEX sessions_expiry_idx ON blog.sessions(expires_at);

CREATE TABLE blog.media_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  uploaded_by uuid REFERENCES blog.users(id) ON DELETE SET NULL,
  storage_key text NOT NULL UNIQUE,
  url text NOT NULL,
  mime_type text NOT NULL,
  size_bytes bigint NOT NULL CHECK (size_bytes >= 0),
  width integer CHECK (width > 0),
  height integer CHECK (height > 0),
  alt_text text NOT NULL DEFAULT '',
  caption text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX media_uploaded_by_idx ON blog.media_assets(uploaded_by);

CREATE TABLE blog.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (btrim(name) <> ''),
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  description text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE blog.tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (btrim(name) <> ''),
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE blog.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL REFERENCES blog.users(id) ON DELETE RESTRICT,
  category_id uuid REFERENCES blog.categories(id) ON DELETE SET NULL,
  cover_asset_id uuid REFERENCES blog.media_assets(id) ON DELETE SET NULL,
  title text NOT NULL CHECK (btrim(title) <> ''),
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  excerpt text NOT NULL DEFAULT '',
  content_markdown text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  featured boolean NOT NULL DEFAULT false,
  seo_title text,
  seo_description text,
  canonical_url text,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  search_document tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('english', title), 'A') ||
    setweight(to_tsvector('english', excerpt), 'B') ||
    setweight(to_tsvector('english', content_markdown), 'C')
  ) STORED,
  CHECK (status <> 'published' OR (published_at IS NOT NULL AND btrim(content_markdown) <> ''))
);
CREATE INDEX posts_published_idx ON blog.posts(published_at DESC, id) WHERE status = 'published';
CREATE INDEX posts_author_idx ON blog.posts(author_id);
CREATE INDEX posts_category_idx ON blog.posts(category_id);
CREATE INDEX posts_cover_idx ON blog.posts(cover_asset_id);
CREATE INDEX posts_search_idx ON blog.posts USING gin(search_document);

CREATE TABLE blog.post_tags (
  post_id uuid NOT NULL REFERENCES blog.posts(id) ON DELETE CASCADE,
  tag_id uuid NOT NULL REFERENCES blog.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);
CREATE INDEX post_tags_tag_idx ON blog.post_tags(tag_id, post_id);

CREATE TABLE blog.post_revisions (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id uuid NOT NULL REFERENCES blog.posts(id) ON DELETE CASCADE,
  snapshot jsonb NOT NULL CHECK (jsonb_typeof(snapshot) = 'object'),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX post_revisions_post_idx ON blog.post_revisions(post_id, id DESC);

CREATE FUNCTION blog.touch_updated_at() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
CREATE TRIGGER users_updated BEFORE UPDATE ON blog.users FOR EACH ROW EXECUTE FUNCTION blog.touch_updated_at();
CREATE TRIGGER media_updated BEFORE UPDATE ON blog.media_assets FOR EACH ROW EXECUTE FUNCTION blog.touch_updated_at();
CREATE TRIGGER categories_updated BEFORE UPDATE ON blog.categories FOR EACH ROW EXECUTE FUNCTION blog.touch_updated_at();
CREATE TRIGGER tags_updated BEFORE UPDATE ON blog.tags FOR EACH ROW EXECUTE FUNCTION blog.touch_updated_at();
CREATE TRIGGER posts_updated BEFORE UPDATE ON blog.posts FOR EACH ROW EXECUTE FUNCTION blog.touch_updated_at();

-- Preserve editorial fields whenever a post is saved; tag mappings are separate.
CREATE FUNCTION blog.record_post_revision() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO blog.post_revisions(post_id, snapshot)
  VALUES (NEW.id, to_jsonb(NEW) - 'search_document');
  RETURN NEW;
END;
$$;
CREATE TRIGGER posts_revision AFTER INSERT OR UPDATE ON blog.posts FOR EACH ROW EXECUTE FUNCTION blog.record_post_revision();

-- Public-facing queries must use this view or equivalent status/time predicates.
CREATE VIEW blog.published_posts AS
SELECT id, author_id, category_id, cover_asset_id, title, slug, excerpt,
       content_markdown, featured, seo_title, seo_description, canonical_url,
       published_at, created_at, updated_at, search_document
FROM blog.posts
WHERE status = 'published' AND published_at <= now();

REVOKE ALL ON SCHEMA blog FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA blog FROM PUBLIC;
REVOKE ALL ON ALL FUNCTIONS IN SCHEMA blog FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA blog REVOKE ALL ON TABLES FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA blog REVOKE ALL ON FUNCTIONS FROM PUBLIC;
INSERT INTO blog.schema_migrations(version) VALUES ('001_initial');
COMMIT;
