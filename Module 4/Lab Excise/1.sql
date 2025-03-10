-- 1. Introduction to SQL
-- Lab 1: Create a new database named school_db and a table called students with the following columns: student_id, student_name, age, class, and address.
-- Lab 2: Insert five records into the students table and retrieve all records using the SELECT statement.

create schema school_db;
create table  students
(
student_id int unique not null,
student_name varchar(50) not null,
age int not null,
class varchar(25) not null ,
address varchar(100) not null
);
insert into students(student_id,student_name,age,class,address) values 
(101,'Riya Sharma', 8, '7th', 'CG Road, Ahmedabad'),
(102,'Dealsi Patel',14, '10th', '12 Sarthana Jakatnaka, Surat'),
(103,'Ayesha Khan', 10, '9th', '50 Shankar Colony, Pune'),
(104,'Rahul Viradiya', 17, '12th', 'Vesu, Surat, Gujrat'),
(105,'Akshy Mordiya', 6, '6th', 'Nehrunagar, Ahmedabad');
select * from students;