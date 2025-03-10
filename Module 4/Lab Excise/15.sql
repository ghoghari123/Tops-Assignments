-- 15. SQL Triggers
--  Lab 1: Create a trigger to automatically log changes to the employees table when a new employee is added.
--  Lab 2: Create a trigger to update the last_modified timestamp whenever an employee record is updated.

create table emp_log
(
log_id int auto_increment primary key,
action varchar(50),
emp_id int,
emp_name varchar(50),
action_date timestamp 
);
create trigger emp_log
after insert on employees
for each row
insert into emp_log(action,emp_id,emp_name) values ('insert',new.emp_id,new.emp_name,current_timestamp());
select * from employees;
insert into employees(emp_id,emp_name,salary,dept_id) values
(211,'Akash Varma',2000,101),(212,'Rahul Gupta',1560,102);
select * from emp_log;

alter table employees add last_modified timestamp  default current_timestamp on update current_timestamp;
create trigger before_emp_update
before update on employees
for each row
set new.last_modified = current_timestamp;
update employees set salary = 1200 where emp_id = 211;
select emp_id,emp_name,salary,last_modified from employees where emp_id=211;