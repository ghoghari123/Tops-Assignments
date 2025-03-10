-- 7. Data Manipulation Language (DML)
-- Lab 1: Insert three records into the courses table using the INSERT command.
--  Lab 2: Update the course duration of a specific course using the UPDATE command.
--  Lab 3: Delete a course with a specific course_id from the courses table using the DELETE command.

insert into courses (course_id,course_name,course_duration) values 
(201,'Riya Italiya',3),
(202,'Delasi Patel',7),
(203,'Jigar Gadhavi',8);
update courses set course_duration = 7 where course_id = 202;
delete from courses where course_id = 203;