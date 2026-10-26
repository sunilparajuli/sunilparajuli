# Blog database

The blog uses a dedicated PostgreSQL database named `sunil_blog` and a `blog` schema. The existing `defaultdb` is not used for blog content. This directory contains the migrations and rollback-only schema verification. The website now includes `/blog` and a protected `/admin` editorial desk.

## Tables

| Table               | Purpose                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| `users`             | Author profiles, admin/editor/author roles, optional password hashes                                           |
| `sessions`          | SHA-256 token hashes, expiry, and revocation; never raw session tokens                                         |
| `posts`             | Markdown content, draft/published/archived states, SEO fields, cover, author, category, publication timestamps |
| `categories`        | One optional primary category per post                                                                         |
| `tags`, `post_tags` | Multiple tags per post                                                                                         |
| `media_assets`      | File URLs/storage keys, alt text, MIME type, and dimensions; upload bytes belong in object storage             |
| `post_revisions`    | Automatic snapshots of post fields after each insert/update (not tag mappings or an editor audit log)          |
| `schema_migrations` | Applied migration versions                                                                                     |

`published_posts` exposes only published posts whose publication time has arrived. Public application queries should use this view. Full-text search uses an English weighted GIN index. Unique slugs, foreign keys, and publishing constraints are enforced by PostgreSQL. Revision history is removed when a post is permanently deleted; use archived status to retain it.

## Applying to another environment

Create an empty `sunil_blog` database first. Configure PostgreSQL's standard `PGHOST`, `PGPORT`, `PGUSER`, `PGDATABASE`, and SSL variables with credentials from a secure source. Do not commit credentials. On this Mac, the installed client is `/Applications/Postgres.app/Contents/Versions/15/bin/psql`.

```sh
psql -X -v ON_ERROR_STOP=1 -f database/migrations/001_initial.sql
psql -X -v ON_ERROR_STOP=1 -f database/verify.sql
```

Apply the initial migration exactly once. It is transactional and intentionally fails if the schema already exists. Inspect `blog.schema_migrations` before applying migrations. The verification transaction rolls back all example rows; identity sequence gaps are harmless.

## Application configuration

- Configure a server-only `DATABASE_URL` pointing to `/sunil_blog`; never use a `NEXT_PUBLIC_` credential variable.
- Use a dedicated runtime database role with only the required privileges when wiring the application; the provisioning account owns the schema. PUBLIC has no schema/table/function privileges.
- Set up verified TLS using Aiven's CA certificate for the production connection. Provisioning used the supplied connection's `sslmode=require` over TLS.
- Create the initial admin through a secure setup flow. No default admin or password is seeded.
- The application hashes passwords with scrypt and a per-password random salt. Sessions use random tokens stored as SHA-256 hashes, expire after eight hours, and are revoked on logout. Login and setup attempts are limited in PostgreSQL.
- Sanitize rendered Markdown, validate uploads, and enforce ownership/role checks in every mutation. The database role column alone does not enforce authorization, and the published view is a query convenience, not row-level access control.
- Configure the Vercel environment variables described below; they are not transferred by a Git push.

## Review the 20 technology drafts

Twenty original, cited explainers were imported into the database as drafts on 26 October 2026. Their text stays in PostgreSQL, outside the public Git repository. They cover chips, AI/software, emerging technology, connected devices, and security/infrastructure. The seed did not publish any article or set an admin password.

1. Apply `002_admin_login_attempts.sql` on a fresh environment after the initial migration. It is already applied on the configured Aiven database.
2. Configure `DATABASE_URL` (database `sunil_blog`), `DATABASE_SSL_CA` (Aiven CA PEM), and `ADMIN_SETUP_TOKEN` in Vercel's Production environment. Redeploy after changing environment values. The local `.env.local` already contains a connection URL and a randomly generated setup token, and is Git-ignored with owner-only file permissions. It still needs the CA certificate.
3. Visit `/admin/setup`, enter the setup token, and choose a password of at least 14 characters for `sunilparajuli2002@gmail.com`. This one-time flow only works before an admin password exists. Remove `ADMIN_SETUP_TOKEN` after setup.
4. Sign in at `/admin/login`. Select an article to edit Markdown and SEO fields, review its saved preview and source links, and publish it. Saving an already published article updates its public text; use **Return to draft** to hide it before editing.
5. `/blog` and `/sitemap.xml` include only published posts whose publication time has arrived. Admin routes are authenticated and marked noindex.

The renderer rejects raw HTML and does not render remote Markdown images. SQL uses bound parameters. Server Actions enforce authentication on every write and use Next.js origin checks. Concurrent edits are rejected rather than silently overwriting a newer save. Revision snapshots are recorded by database triggers.

The CA is required for verified TLS; the application never sets `rejectUnauthorized: false`. Database connectivity failures show a generic error page rather than exposing connection details. A server-only pool limits connections per process; review provider limits before raising that setting. Keep preview deployments isolated from production database credentials.
