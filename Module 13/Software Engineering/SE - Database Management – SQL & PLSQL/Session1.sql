-- Create the InstaClone Database and Users Table
create database InstaClone;
use InstaClone; 
create table Users(
	user_id int primary key,
    username varchar(50),
    email varchar(100),
    followers_count int
);
insert into Users(user_id,username,email,followers_count) values 
(1,'travelwithtara','tara@example.com',12500),
(2,'fitness_raj','raj@example.com',8750),
(3,'foodie_meera','meera@example.com',15230);
select * from Users;


-- Create the Posts Table with a Foreign Key
create table Posts(
	post_id int primary key,
    user_id int,
    caption varchar(255),
    post_date date,
    foreign key(user_id) references Users(user_id)
);
insert into Posts(post_id,user_id,caption,post_date) values 
(101,1,'Sunset at the beach!','2026-06-20'),
(102,2,'Morning workout completed','2026-06-21'),
(103,3,'Trying a new pasta recipe!','2026-06-22');
select * from Posts;