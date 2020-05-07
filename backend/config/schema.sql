DROP DATABASE IF EXISTS roofmaster;

CREATE DATABASE roofmaster;

USE roofmaster;

CREATE TABLE stocks (
id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(64) NOT NULL,
picture TINYTEXT,
description VARCHAR(2048),
item_number INT(6) NOT NULL,
weight DECIMAL(12,4) UNSIGNED,
units INT(3) UNSIGNED,
category VARCHAR(128) NOT NULL,
subcategory VARCHAR(128) NOT NULL,
price DECIMAL(8,2) UNSIGNED NOT NULL,
quantity INT(6) UNSIGNED,
createdAt DATE,
updatedAT DATE,
PRIMARY KEY (id)
);