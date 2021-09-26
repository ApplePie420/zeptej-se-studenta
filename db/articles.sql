CREATE TABLE articles (
    ID          INT     NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(255),
    author      VARCHAR(255),
    category    VARCHAR(255),
    text        TEXT,
    created-at  DATE
);