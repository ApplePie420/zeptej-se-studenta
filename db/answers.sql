REATE TABLE answers (
    answerID int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    questionID int(11) NOT NULL,
    answer text,
    author varchar(255),
    created_at date DEFAULT NULL,
    FOREIGN KEY(questionID) REFERENCES questions(ID)
);