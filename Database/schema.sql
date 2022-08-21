CREATE TABLE movies_cleaned (
  id INTEGER,
  original_title VARCHAR PRIMARY KEY NOT NULL,
  release_year INTEGER,
  genre VARCHAR,
  overview VARCHAR,
  runtime INTEGER,
  vote_average INTEGER,
  keywording VARCHAR,
  original_language VARCHAR,
  prod_companies VARCHAR,
  prod_countries VARCHAR,
  release_date TIMESTAMP,
  budget INTEGER,
  revenue INTEGER,
  popularity INTEGER,
  languages_spoken VARCHAR,
  casting VARCHAR
);

SELECT * FROM movies_cleaned;
