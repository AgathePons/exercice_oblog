-- Deploy oblog:init-db to pg

BEGIN;

CREATE TABLE category (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  route TEXT NOT NULL UNIQUE,
  label TEXT NOT NULL UNIQUE
);
CREATE TABLE article (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL UNIQUE,
  category INT NOT NULL REFERENCES category(id)
);

COMMIT;
