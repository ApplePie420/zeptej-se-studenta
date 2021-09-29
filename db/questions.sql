CREATE TABLE questions (
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    question TEXT,
    author VARCHAR(255),
    email VARCHAR(255),
    created_at DATETIME
);