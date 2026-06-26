CREATE TABLE Restaurents (
	id INT PRIMARY KEY, 
	name VARCHAR(100) NOT NULL, 
	location VARCHAR(100) NOT NULL, 
	cuisine VARCHAR(100)
);

CREATE TABLE FoodOrder (
	order_id INT PRIMARY KEY, 
	restaurant_id INT, 
	user_id INT, 
	order_total DECIMAL(10,2), 
	FOREIGN KEY (restaurant_id) REFERENCES Restaurents(id)
);

CREATE TABLE SpotifyUser (
	user_id INT PRIMARY KEY, 
	username VARCHAR(50) UNIQUE, 
	email VARCHAR(100) NOT NULL, 
	subscription_type VARCHAR(20)
);

INSERT INTO Restaurents VALUES 
(1,'Spice Villa','Ahmedabad','North Indian'),
(2,'Pizza Hub','Ahmedabad','Italian'),
(3,'Dragon Wok','Surat','Chinese');

INSERT INTO FoodOrder VALUES 
(101,1,1,1200),
(102,2,2,2500),
(103,1,3,800),
(104,3,4,3200),
(105,2,5,1500);

INSERT INTO SpotifyUser VALUES 
(1,'music_lover','music@example.com','Premium'),
(2,'rockstar_99','rock@example.com','Free'),
(3,'beat_master','beat@example.com','Premium'),
(4,'jazz_fan','jazz@example.com','Family'),
(5,'pop_queen','pop@example.com','Premium'),
(6,'hiphop_king','hiphop@example.com','Free');

CREATE VIEW TopSpendersView AS SELECT s.username, f.order_total FROM FoodOrder f JOIN SpotifyUser s ON f.user_id = s.user_id WHERE f.order_total > 1000;
SELECT * FROM TopSpendersView WHERE order_total > 2000 ORDER BY order_total DESC;
