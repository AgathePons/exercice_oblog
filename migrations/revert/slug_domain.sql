-- Revert oblog:slug_domain from pg

BEGIN;

ALTER TABLE article
  ALTER COLUMN slug TYPE TEXT;

DROP DOMAIN article_slug;

COMMIT;
