DROP DATABASE IF EXISTS bookmarksApp;
CREATE DATABASE bookmarksApp;
USE bookmarksApp;

CREATE TABLE User (
  userId INT PRIMARY KEY,
  googleSecret TEXT
);

CREATE TABLE Bookmark (
  link TEXT,
  userId INT,
  
  FOREIGN KEY (userId) REFERENCES User(userId), 
)