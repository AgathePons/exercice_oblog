-- Deploy oblog:slug_domain to pg

BEGIN;

CREATE DOMAIN post_slug AS TEXT
CHECK(
  -- text lowercase with tiret and number (no special character)
  VALUE ~ '^[0-9a-z-]*$'
);

ALTER TABLE post
  ALTER COLUMN slug TYPE post_slug;

COMMIT;
