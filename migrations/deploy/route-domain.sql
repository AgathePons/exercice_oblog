-- Deploy oblog:route-domain to pg

BEGIN;

CREATE DOMAIN category_route AS TEXT
CHECK(
  -- begins with '/' then text lowercase with tiret and number (no special character)
  VALUE ~ '^\/[0-9a-z-]*$'
);

ALTER TABLE category
  ALTER COLUMN route TYPE category_route;

COMMIT;
