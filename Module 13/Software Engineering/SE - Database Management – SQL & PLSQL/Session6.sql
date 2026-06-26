CREATE TABLE orders (
	order_id INT AUTO_INCREMENT PRIMARY KEY, 
	user_id INT, 
	order_date DATE
);
INSERT INTO orders (user_id, order_date) VALUES 
(1,'2026-06-01'),
(1,'2026-06-05'),
(2,'2026-06-03'),
(2,'2026-06-07'),
(2,'2026-06-10'),
(3,'2026-06-08');

CREATE TABLE restaurant (
	restaurant_id INT AUTO_INCREMENT PRIMARY KEY, 
	name VARCHAR(100), 
	rating DECIMAL(2,1)
);
INSERT INTO restaurant (name, rating) VALUES 
('Spice Villa',4.7),
('Spice Villa',4.5),
('Pizza Hub',4.2),
('Pizza Hub',4.1),
('Food Corner',3.8),
('Food Corner',3.5);

CREATE TABLE payments (
	payment_id INT AUTO_INCREMENT PRIMARY KEY, 
	user_id INT, 
	amount DECIMAL(10,2), 
	payment_date DATE
);
INSERT INTO payments (user_id, amount, payment_date) VALUES 
(1,2500,'2026-06-01'),
(2,1800,'2026-06-02'),
(3,3200,'2026-06-03'),
(1,1500,'2026-06-05'),
(2,2700,'2026-06-06');

CREATE TABLE movies (
	movie_id INT AUTO_INCREMENT PRIMARY KEY, 
	name VARCHAR(100), 
	rating DECIMAL(2,1)
);
INSERT INTO movies (name, rating) VALUES 
('Inception',4.8),
('Inception',4.6),
('Interstellar',4.9),
('Interstellar',4.8),
('Avatar',3.9),
('Avatar',4.0),
('Titanic',4.3),
('Titanic',4.2);


SELECT user_id, COUNT(*) AS order_count FROM orders GROUP BY user_id;
SELECT name, AVG(rating) AS average_rating FROM restaurant GROUP BY name HAVING AVG(rating) > 4.0;
SELECT DISTINCT user_id FROM payments WHERE amount > 2000;
SELECT name FROM movies GROUP BY name HAVING AVG(rating) > (SELECT AVG(rating) FROM movies);