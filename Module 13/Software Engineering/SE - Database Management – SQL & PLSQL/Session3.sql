create table restaurants(
	id INT auto_increment primary key,
    name VARCHAR(100),
    cuisine  VARCHAR(100),
    rating DECIMAL(2,1),
    city VARCHAR(100) 
);
insert into restaurants(name,cuisine,rating,city) values 
('Spice Villa','North Indian',4.5,'Ahmedabad'),
('Pizza Hub','Italian',4.2,'Ahmedabad'),
('Dragon Wok','Chinese',3.8,'Surat'),
('Taco Fiesta','Mexican',3.2,'Ahmedabad'),
('Sushi World','Japanese',4.8,'Mumbai');
update restaurants set rating = 4.7 where name = 'Dragon Wok';
delete from restaurants where rating < 3.5;
select * from restaurants where city = 'Ahmedabad' and ranting > 4.0 limit 2;
select * from restaurants;
desc restaurants;
