-- Revert oblog:slug_domain from pg

BEGIN;

ALTER TABLE post
  ALTER COLUMN slug TYPE TEXT;

DROP DOMAIN post_slug;

COMMIT;
