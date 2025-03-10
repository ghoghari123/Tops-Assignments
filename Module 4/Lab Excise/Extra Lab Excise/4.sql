-- 4. Main SQL Commands and Sub-commands (DDL)
--  Lab 3: Create a table authors with the following columns: author_id, first_name, last_name, and country. Set author_id as the primary key.
--  Lab 4: Create a table publishers with columns: publisher_id, publisher_name, contact_number, and address. Set publisher_id as the primary key and
-- contact_number as unique.

create table authors
(
author_id int primary key,
first_name varchar(50),
last_name varchar(50),
country varchar(50)
); 
insert into authors(author_id,first_name,last_name,country) values 
(101,'Riya','Patel','India'),
(102,'Dealsi','Patel','USA'),
(103,'Kruti','Sharmna','Colombia'),
(104,'Margarte','Atwood','Canada'),
(105,'Urvisha','Surani','USA');


create table publishers
(
publisher_id int primary key,
publisher_name varchar(100),
contact_number varchar(20),
address varchar(150)
);
insert into publishers(publisher_id,publisher_name,contact_number,address) values
(101,'Harpercoolins','+91 8924826720','New Delhi, India'),
(102,'Shree Gupta','+1 8901340390','New Jersey, USA'),
(103,'Penguin Random House','+237 9930201939','Berlin, Germany'),
(104,'Faber & Faber','+1 1334092277','Toronto, Cnada'),
(105,'Sahitya Akademi','+91 7546809988','Surat, Gujrat, India');
select * from publishers;
