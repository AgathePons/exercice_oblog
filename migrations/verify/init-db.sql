-- Verify oblog:init-db on pg

BEGIN;

SELECT * FROM post WHERE false;

SELECT * FROM category WHERE false;

ROLLBACK;
