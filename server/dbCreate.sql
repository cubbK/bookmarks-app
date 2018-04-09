DROP DATABASE IF EXISTS bookmarks_app;
CREATE DATABASE bookmarks_app;

USE bookmarks_app;

CREATE TABLE User (
  user_id INT PRIMARY KEY,
  google_secret TEXT
)