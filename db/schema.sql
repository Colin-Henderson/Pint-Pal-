3-- state , style , abv , name ,  etc.
CREATE DATABASE pintpal_db;

USE pintpal_db;

CREATE TABLE beerlog
(
	id int NOT NULL AUTO_INCREMENT,
	brand_name varchar(255) NOT NULL,
	beer_name varchar(255) NOT NULL, 
	state_abbrev varchar(30),
	beer_style varchar(40),
	abv Decimal (4,2), 
	rating integer(10) NOT NULL, 
	notes varchar(350), 
	PRIMARY KEY (id)
);

-- CREATE TABLE masterbeer (
-- )