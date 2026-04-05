-- 11. SQL Joins
-- Lab 1: Create two tables: departments and employees. Perform an INNER JOIN to display employees along with their respective departments.
--  Lab 2: Use a LEFT JOIN to show all departments, even those without employees.

create schema Company;
create table departments
(
dept_id int primary key,
dept_name varchar(100)
);
create table employees
(
emp_id int unique,
emp_name varchar(50) not null,
dept_id int,
foreign key employees(dept_id) references departments(dept_id)
);

insert into departments (dept_id,dept_name) values
(101,'HR'),(102,'Sales'),(103,'Engineering'),(104,'Accounting');
insert into employees(emp_id,emp_name,dept_id) values
(201,'Delasi Patel',101),(202,'Vrsha Parmar',102),(203,'Urvisha Patel',103),
(204,'Krish Kheni',103),(205,'Riya Dobariya',104),(206,'Yatri Sharma',102),
(207,'Priyam Parajapti',101),(208,'Rajesh Khanna',104),(209,'Dipika Mehta',102),
(210,'Akshy Nakum',103);
select e.emp_name,d.dept_name from employees e inner join departments d on e.dept_id = d.dept_id;

select d.dept_name,e.emp_name from departments d left join employees e on d.dept_id = e.dept_id;




