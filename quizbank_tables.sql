CREATE DATABASE quiz_bank;

USE quiz_bank;

CREATE TABLE quizzes (
  quiz_id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  PRIMARY KEY (quiz_id)
);

CREATE TABLE questions (
  question_id INT(11) NOT NULL AUTO_INCREMENT,
  quiz_id INT(11) NOT NULL,
  question TEXT NOT NULL,
  PRIMARY KEY (question_id),
  FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id)
);

CREATE TABLE answers (
  answer_id INT(11) NOT NULL AUTO_INCREMENT,
  question_id INT(11) NOT NULL,
  answer TEXT NOT NULL,
  correct TINYINT(1) NOT NULL,
  PRIMARY KEY (answer_id),
  FOREIGN KEY (question_id) REFERENCES questions(question_id)
);

