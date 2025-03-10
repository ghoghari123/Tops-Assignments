-- 17. PL/SQL Control Structures
--  Lab 1: Write a PL/SQL block using an IF-THEN condition to check the department of an employee.
--  Lab 2: Use a FOR LOOP to iterate through employee records and display their names.\


declare
	emp_id number := 205;
	dept_id number; 
begin
	select dept_id into dept_id from employees where emp_id = emp_id; 
	if dept_id = 101 then
		dbms_output.put_line('It Is Belong To A HR Department');
	elsif dept_id = 102 then
		dbms_output.put_line('It Is Belong To A Sales Department');
	elsif dept_id = 103 then
		dbms_output.put_line('It Is Belong To A Engineering Department');
	else
		dbms_output.put_line('It Is Belong To A Accounting Department');
	end if;
end;
-- SELECT emp_id, COUNT(*)  FROM employees  GROUP BY emp_id  HAVING COUNT(*) > 1;





declare
	emp_name employees.emp_name%type;
begin
    dbms_output.put_line('Employees Names : ');
	for emp_record in (select emp_name from employees) loop
		dbms_output.put_line(emp_record.emp_name);
	end loop;
end;