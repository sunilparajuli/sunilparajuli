-- All test data is rolled back. A failed assertion aborts this transaction.
BEGIN;
DO $$
DECLARE
  author uuid;
  post uuid;
  category uuid;
  tag uuid;
  n integer;
BEGIN
  INSERT INTO blog.users(email, display_name) VALUES ('schema-check@example.invalid', 'Schema verification') RETURNING id INTO author;
  INSERT INTO blog.categories(name, slug) VALUES ('Schema check', 'schema-check') RETURNING id INTO category;
  INSERT INTO blog.tags(name, slug) VALUES ('Schema check', 'schema-check') RETURNING id INTO tag;
  INSERT INTO blog.posts(author_id, category_id, title, slug, content_markdown)
  VALUES (author, category, 'Social protection verification', 'schema-verification', 'Testing social security publication.') RETURNING id INTO post;
  INSERT INTO blog.post_tags VALUES (post, tag);
  IF EXISTS (SELECT 1 FROM blog.published_posts WHERE id = post) THEN RAISE EXCEPTION 'Draft exposed'; END IF;
  BEGIN
    UPDATE blog.posts SET status = 'published' WHERE id = post;
    RAISE EXCEPTION 'Publication timestamp constraint failed';
  EXCEPTION WHEN check_violation THEN NULL;
  END;
  UPDATE blog.posts SET status = 'published', published_at = now() + interval '1 day' WHERE id = post;
  IF EXISTS (SELECT 1 FROM blog.published_posts WHERE id = post) THEN RAISE EXCEPTION 'Future post exposed'; END IF;
  UPDATE blog.posts SET published_at = now() WHERE id = post;
  IF NOT EXISTS (SELECT 1 FROM blog.published_posts WHERE id = post) THEN RAISE EXCEPTION 'Published post missing'; END IF;
  IF NOT EXISTS (SELECT 1 FROM blog.posts WHERE id = post AND search_document @@ plainto_tsquery('english', 'social protection')) THEN RAISE EXCEPTION 'Search indexing failed'; END IF;
  SELECT count(*) INTO n FROM blog.post_revisions WHERE post_id = post;
  IF n <> 3 THEN RAISE EXCEPTION 'Revision snapshots missing'; END IF;
  BEGIN
    INSERT INTO blog.posts(author_id, title, slug) VALUES (author, 'Duplicate', 'schema-verification');
    RAISE EXCEPTION 'Duplicate slug accepted';
  EXCEPTION WHEN unique_violation THEN NULL;
  END;
  BEGIN
    DELETE FROM blog.users WHERE id = author;
    RAISE EXCEPTION 'Author deletion should be restricted';
  EXCEPTION WHEN foreign_key_violation THEN NULL;
  END;
  INSERT INTO blog.sessions(user_id, token_hash, expires_at) VALUES (author, repeat('a',64), now()+interval '1 hour');
  RAISE NOTICE 'PASS: drafts, publication timestamps, future posts, search, revisions, unique slugs, foreign keys, and sessions';
END;
$$;
ROLLBACK;
SELECT table_name FROM information_schema.tables WHERE table_schema = 'blog' ORDER BY table_name;
SELECT version FROM blog.schema_migrations;
