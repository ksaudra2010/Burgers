### Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgername varchar(30) NOT NULL,
	eaten boolean DEFAULT false,
	PRIMARY KEY (id)
);
