-- Verify oblog:init-db on pg

BEGIN;

SELECT * FROM article WHERE false;

SELECT * FROM category WHERE false;

ROLLBACK;
