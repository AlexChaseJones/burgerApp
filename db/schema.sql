CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE myburgers (
	id int AUTO_INCREMENT,
	burger_name varchar(24),
	devour BIT(1),
	dateMade TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);
