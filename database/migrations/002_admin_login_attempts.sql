BEGIN;
CREATE TABLE blog.login_attempts (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 scope_hash text NOT NULL,
 attempted_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX login_attempts_scope_idx ON blog.login_attempts(scope_hash, attempted_at DESC);
INSERT INTO blog.schema_migrations(version) VALUES ('002_admin_login_attempts');
COMMIT;
