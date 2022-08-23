CREATE TABLE movies_cleaned3 (
  id VARCHAR PRIMARY KEY NOT NULL,
  original_title VARCHAR,
  release_year VARCHAR,
  genre VARCHAR,
  overview VARCHAR,
  runtime VARCHAR,
  vote_average VARCHAR,
  keywording VARCHAR,
  original_language VARCHAR,
  prod_companies VARCHAR,
  prod_countries VARCHAR,
  release_date VARCHAR,
  budget VARCHAR,
  revenue VARCHAR,
  popularity VARCHAR,
  languages_spoken VARCHAR,
  casting VARCHAR
);

SELECT * FROM movies_cleaned3;
