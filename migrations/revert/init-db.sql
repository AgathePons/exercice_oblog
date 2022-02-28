-- Revert oblog:init-db from pg

BEGIN;

DROP TABLE category, post;

COMMIT;
