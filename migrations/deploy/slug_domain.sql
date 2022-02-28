-- Deploy oblog:slug_domain to pg

BEGIN;

CREATE DOMAIN article_slug AS TEXT
CHECK(
  -- text lowercase with tiret and number (no special character)
  VALUE ~ '^[0-9a-z-]*$'
);

ALTER TABLE article
  ALTER COLUMN slug TYPE article_slug;

COMMIT;
