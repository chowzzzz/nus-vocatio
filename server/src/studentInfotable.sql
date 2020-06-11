DROP DATABASE IF EXISTS students;
CREATE DATABASE students;
USE students;

CREATE TABLE faculty (
  faculty_id TINYINT(9)  NOT NULL AUTO_INCREMENT,
  faculty_name varchar(10) NOT NULL,
  PRIMARY KEY (faculty_id)
) AUTO_INCREMENT = 1;
INSERT INTO faculty VALUES (1, 'FASS');
INSERT INTO faculty VALUES (2, 'BIZ');
INSERT INTO faculty VALUES (3, 'SOC');
INSERT INTO faculty VALUES (4, 'SOE');
INSERT INTO faculty VALUES (5, 'D&E');
INSERT INTO faculty VALUES (6, 'Dentistry');
INSERT INTO faculty VALUES (7, 'Medicine');
INSERT INTO faculty VALUES (8, 'Law');
INSERT INTO faculty VALUES (9, 'Science');



CREATE TABLE studentinfo (
  student_id mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(100) default NULL,
  mobile varchar(10) default NULL,
  email varchar(100) default NULL,
  linkedin TEXT default NULL,
  faculty_id TINYINT(9) NOT NULL,
  password varchar(255),
  PRIMARY KEY (student_id),
  KEY fk_faculty_id_idx (faculty_id),
  CONSTRAINT fk_faculty_id FOREIGN key (faculty_id) REFERENCES faculty (faculty_id) ON UPDATE CASCADE
) AUTO_INCREMENT=1;