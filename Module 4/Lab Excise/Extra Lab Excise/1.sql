-- 1. Introduction to SQL
--  Lab 3: Create a database called library_db and a table books with columns: book_id, title, author, publisher, year_of_publication, and price. Insert five records into
-- the table.
--  Lab 4: Create a table members in library_db with columns: member_id, member_name, date_of_membership, and email. Insert five records into this table.

create schema library_db;
create table books
(
book_id int primary key,
title varchar(100) not null,
author varchar(70),
publisher varchar(100) not null,
year_of_publication varchar(25),
price double
);
-- drop table books;
insert into books(book_id,title,author,publisher,year_of_publication,price) values 
(101,'The White Tiger','Harper Adiga','Harporcollin India',2008,299),
(102,'George Orwell','Harper Adiga','Secker & Warburg',1984,99),
(103,'Kabir Ke Dohe',null,'Sahitya Akadami',1500,59),
(104,'Madhudhala','Harivansh Rai Bachhan','Prabhat Prakashan',1935,89),
(105,'The God Of Samll Things',null,'Doubley',1950,190);
-- delete from books;
select * from books;

create table members
(
member_id int unique,
member_name varchar(100) not null,
date_of_membership date,
email varchar(50)
);
insert into members(member_id,member_name,date_of_membership,email) values
(101,'Amit Sharma','2023-01-01','amitshrma9@gmail.com'),
(102,'Riya Italiya','2022-02-20','riya_italiya@gmail.com'),
(103,'Delasi Patel','2015-10-28','delasip20@gmail.com'),
(104,'Shreya Dobariya','2022-09-19','shreya89@gmail.com'),
(105,'Nirmit Chavda','2008-12-29','chavdanirmit12@gmail.com');
select * from members;
