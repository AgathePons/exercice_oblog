-- Revert oblog:init-db from pg

BEGIN;

DROP TABLE category, article;

COMMIT;
