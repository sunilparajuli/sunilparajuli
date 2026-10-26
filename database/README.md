# Blog database

The blog uses a dedicated PostgreSQL database named `sunil_blog` and a `blog` schema. The existing `defaultdb` is not used for blog content. This directory contains the initial migration and rollback-only verification; it does not implement the website's blog UI or authentication.

## Tables

| Table | Purpose |
| --- | --- |
| `users` | Author profiles, admin/editor/author roles, optional password hashes |
| `sessions` | SHA-256 token hashes, expiry, and revocation; never raw session tokens |
| `posts` | Markdown content, draft/published/archived states, SEO fields, cover, author, category, publication timestamps |
| `categories` | One optional primary category per post |
| `tags`, `post_tags` | Multiple tags per post |
| `media_assets` | File URLs/storage keys, alt text, MIME type, and dimensions; upload bytes belong in object storage |
| `post_revisions` | Automatic snapshots of post fields after each insert/update (not tag mappings or an editor audit log) |
| `schema_migrations` | Applied migration versions |

`published_posts` exposes only published posts whose publication time has arrived. Public application queries should use this view. Full-text search uses an English weighted GIN index. Unique slugs, foreign keys, and publishing constraints are enforced by PostgreSQL. Revision history is removed when a post is permanently deleted; use archived status to retain it.

## Applying to another environment

Create an empty `sunil_blog` database first. Configure PostgreSQL's standard `PGHOST`, `PGPORT`, `PGUSER`, `PGDATABASE`, and SSL variables with credentials from a secure source. Do not commit credentials. On this Mac, the installed client is `/Applications/Postgres.app/Contents/Versions/15/bin/psql`.

```sh
psql -X -v ON_ERROR_STOP=1 -f database/migrations/001_initial.sql
psql -X -v ON_ERROR_STOP=1 -f database/verify.sql
```

Apply the initial migration exactly once. It is transactional and intentionally fails if the schema already exists. Inspect `blog.schema_migrations` before applying migrations. The verification transaction rolls back all example rows; identity sequence gaps are harmless.

## Application integration still required

- Configure a server-only `DATABASE_URL` pointing to `/sunil_blog`; never use a `NEXT_PUBLIC_` credential variable.
- Use a dedicated runtime database role with only the required privileges when wiring the application; the provisioning account owns the schema. PUBLIC has no schema/table/function privileges.
- Set up verified TLS using Aiven's CA certificate for the production connection. Provisioning used the supplied connection's `sslmode=require` over TLS.
- Create the initial admin through a secure setup flow. No default admin or password is seeded.
- Hash passwords using Argon2id or bcrypt; generate random session tokens, store only their hashes, and enforce expiry/revocation and roles on the server.
- Sanitize rendered Markdown, validate uploads, and enforce ownership/role checks in every mutation. The database role column alone does not enforce authorization, and the published view is a query convenience, not row-level access control.
- Add the blog pages, protected admin UI, connection pool, and Vercel environment settings. These are not part of this schema migration.
