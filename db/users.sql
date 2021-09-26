CREATE TABLE users (
    ID          INT     NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username    VARCHAR(255),
    password    VARCHAR(128),
    email       VARCHAR(255),
    phone       CHAR(15),
    isAdmin     BOOLEAN,
    noAsked     INT
);