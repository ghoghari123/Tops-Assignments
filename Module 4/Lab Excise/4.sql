-- 4. Main SQL Commands and Sub-commands (DDL)
-- Lab 1: Create a table courses with columns: course_id, course_name, and course_credits. Set the course_id as the primary key.
-- Lab 2: Use the CREATE command to create a database university_db.

create schema university_db;
create table courses
(
course_id int primary key,
course_name varchar(50),
course_credits double
);
insert into courses (course_id,course_name,course_credits) values 
(101,'Riya Italiya',5),
(102,'Delasi Patel',4),
(103,'Jigar Gadhavi',5),
(104,'Hemanshi Sharma',9),
(105,'Asha Kheni',5),
(106,'Tina Mehta',3),
(107,'Meesha Dobariya',8),
(108,'Shreya Patel',5),
(109,'Isha Babriya',6),
(110,'Urvisha Gupta',7);
-- delete from courses;
select * from courses;