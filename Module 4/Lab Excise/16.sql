-- 16. Introduction to PL/SQL
--  Lab 1: Write a PL/SQL block to print the total number of employees from the employees table.
--  Lab 2: Create a PL/SQL block that calculates the total sales from an orders table.

declare  
	total_employees number;
begin
	select count(emp_name) into total_employees from emlpoyees;
    dbms_output.put_line('total_employees : '|| total_employees);
 end;


--order table doesn't exit that's why i create this table and then excute the query
create table orders (
    order_id number primary key,
    order_date varchar(10),
    sales_amount number
);
insert all 
    into orders(order_id, order_date, sales_amount) values (101, '2025-03-01', 2000)
    into orders(order_id, order_date, sales_amount) values(102, '2021-03-02', 1400)
    into orders(order_id, order_date, sales_amount) values(103, '2020-03-03', 500)
    into orders(order_id, order_date, sales_amount) values(104, '2022-03-05', 1000)
    into orders(order_id, order_date, sales_amount) values(105, '2025-03-01', 650)
select * from dual;// dual is a special dummy table in Oracle.
select * from orders;

declare
	total_sales_amount number;
begin
	select sum(sales_amount) into total_sales_amount from orders;
	dbms_output.put_line('Total Sales  Amount: '||total_sales_amount);
end;