-- 12. SQL Group By
--  Lab 1: Group employees by department and count the number of employees in each department using GROUP BY.
--  Lab 2: Use the AVG aggregate function to find the average salary of employees in each department.

select dept_id ,count(*) as emp_count from employees group by dept_id;

alter table employees add salary double;

update  employees set salary = 20000 where emp_id=201;
update  employees set salary = 100000 where emp_id = 202;
update  employees set salary = 24000 where emp_id = 203;
update  employees set salary = 190000 where emp_id = 204;
update  employees set salary = 2300 where emp_id = 205;
update  employees set salary = 45000 where emp_id = 206;
update  employees set salary = 29000 where emp_id = 207;
update  employees set salary = 8000 where emp_id = 208;
update  employees set salary = 9000 where emp_id = 209;
update  employees set salary = 1200 where emp_id = 210;
select * from employees;
select department_id,avg(salary) as average_salary from employees group by department_id;
