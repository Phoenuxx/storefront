DROP DATABASE IF EXISTS phoenux_store;

CREATE DATABASE phoenux_store;

USE phoenux_store;

CREATE TABLE Stock (
id INT AUTO_INCREMENT,
product VARCHAR (36) NOT NULL,
picture TINYTEXT ,
description VARCHAR(255),
department VARCHAR(255),
price DECIMAL(6,2) UNSIGNED NOT NULL,
quantity INT UNSIGNED,
PRIMARY KEY (id)
);

INSERT INTO Stock (product, picture, description, department, price, quantity)
VALUES ('Overwatch', 'https://i.pinimg.com/474x/bb/f3/4f/bbf34f7f29ab389ae9171180747c2574.jpg', 'The world could always use more heroes...', 'Video Games', 30.00, 99)
,('Soccer ball', 'https://www.frontrowsoccer.com/wp-content/uploads/2019/11/MLS-adidas-ball-2020-11019a-1198x640.png', 'Unofficial 2020 MLS Soccer Ball', 'Sports & Outdoors', 9.99, 520) 
,('No Game No Life Anime', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/No_Game_No_Life_light_novel_vol_1.jpg/220px-No_Game_No_Life_light_novel_vol_1.jpg', 'An Urban Legend, "Blank", an unbeatable pair of gamer siblings are transported to a world where everything is decided by games', 'Shows', 5.50, null)
;
SELECT * FROM phoenux_store.Stock;