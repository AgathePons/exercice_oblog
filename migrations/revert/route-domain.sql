-- Revert oblog:route-domain from pg

BEGIN;

ALTER TABLE category
  ALTER COLUMN route TYPE TEXT;

DROP DOMAIN category_route;

COMMIT;
