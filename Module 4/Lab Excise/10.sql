-- 10. Transaction Control Language (TCL)
--  Lab 1: Insert a few rows into the courses table and use COMMIT to save the changes.
--  Lab 2: Insert additional rows, then use ROLLBACK to undo the last insert operation.
--  Lab 3: Create a SAVEPOINT before updating the courses table, and use it to roll back specific changes.
 
insert into courses (course_id,course_name,course_duration) values 
(204,'Dhruvita Mordiya',9),
(205,'Foram Radadiya',6),
(206,'Rutvik Gupta',3);
commit; 

insert into courses (course_id,course_name,course_duration) values 
(207,'Kruti Sharma',5),
(208,'Raj Arora',7);
rollback;

insert into courses (course_id,course_name,course_duration) values  (209,'Lalu Patrl',7);
savepoint before_update;
update courses set course_name='Ram Raja' where course_id=209;
rollback to savepoint before_update;

select * from courses;