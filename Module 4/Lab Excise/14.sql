-- 14. SQL View
--  Lab 1: Create a view to show all employees along with their department names.
--  Lab 2: Modify the view to exclude employees whose salaries are below $50,000.

create view emp_dept_view as select e.emp_name,e.emp_id,d.dept_name from employees e join departments d on e.dept_id = d.dept_id;
select * from emp_dept_view;


create view viewempdept as select e.emp_name,e.emp_id,d.dept_name,e.salary from employees e join departments d on e.dept_id = d.dept_id 
where e.salary >= 50000;
-- drop view emp_dept_view;
select * from viewempdept;