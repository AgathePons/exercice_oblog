-- Revert oblog:view_post_with_category from pg

BEGIN;

DROP VIEW post_with_category;

COMMIT;
