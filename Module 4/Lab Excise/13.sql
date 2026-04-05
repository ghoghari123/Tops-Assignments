-- 13. SQL Stored Procedure
-- Lab 1: Write a stored procedure to retrieve all employees from the employees table based on department.
--  Lab 2: Write a stored procedure that accepts course_id as input and returns the course details.

delimiter &&
create procedure get_emp_by_dept(depr_id int)
begin
	select emp_id,emp_name,dept_id from employees where dept_id = dept_id;
end &&
call get_emp_by_dept(5);
select * from employees;
-- drop procedure get_emp_by_dept;