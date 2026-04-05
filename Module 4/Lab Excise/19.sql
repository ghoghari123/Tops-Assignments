-- 19. Rollback and Commit Savepoint
--  Lab 1: Perform a transaction where you create a savepoint, insert records, then rollback to the savepoint.
--  Lab 2: Commit part of a transaction after using a savepoint and then rollback the remaining changes.

create schema savepoint_rollback;
create table emp
(
eid int unique,
e_fname varchar(50) not null,
e_lname varchar(50) not null,
d_name varchar(25)
);

insert into emp(eid , e_fname , e_lname , d_name ) values
(101,'Delasi','Patel','Engineering'),(102,'Riya','Italiya','Sales');
savepoint savepoint_1;
insert into emp(eid , e_fname , e_lname , d_name ) values
(103,'Shreya','Dobariya','Marketing'),(104,'Meesha','Babariya','Sales');
rollback to savepoint savepoint_1;
commit;
select * from emp;

insert into emp(eid , e_fname , e_lname , d_name ) values
(201,'Priya','Sarmukh','Marketing'),(202,'Urvisha','Patel','Engineering');
savepoint savepoint_2;
insert into emp(eid , e_fname , e_lname , d_name ) values
(203,'Romin','Gupta','Sales');
commit;
rollback to savepoint savepoint_2;
commit;