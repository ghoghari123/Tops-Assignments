-- 18. SQL Cursors
-- Lab 1: Write a PL/SQL block using an explicit cursor to retrieve and display employee details.
--  Lab 2: Create a cursor to retrieve all courses and display them one by one.

declare
	emp_id employees.emp_id%type;
    emp_name employees.emp_name%type;
    dept_id employees.dept_id%type;
cursor emp_cursor is select emp_id, emp_name, dept_id from employees;
begin
    dbms_output.put_line(' -*-*-*-*-*-*-*-*-*-*-*- Employees Details  -*-*-*-*-*-*-*-*-*-*-*- ');
	open emp_cursor;
    	loop
    		fetch emp_cursor into emp_id, emp_name, dept_id;
			exit when emp_cursor%notfound;
			dbms_output.put_line('-----------------------------------------------------------------------------------------------');
			dbms_output.put_line(' Employee id : '||emp_id||'      Employee Name : '||emp_name||'      Department Id : '||dept_id);
			dbms_output.put_line('-----------------------------------------------------------------------------------------------');
		end loop;
	close emp_cursor;
end;



declare
	course_id courses.course_id%type;
    course_name courses.course_name%type;
    course_credits courses.course_credits%type;
cursor courses_cursor is select course_id, course_name, course_credits from courses;
begin
    dbms_output.put_line(' -*-*-*-*-*-*-*-*-*-*-*- Courses Details  -*-*-*-*-*-*-*-*-*-*-*- ');
	open courses_cursor;
    	loop
    		fetch courses_cursor into course_id, course_name, course_credits;
			exit when courses_cursor%notfound;
			dbms_output.put_line('-----------------------------------------------------------------------------------------------');
			dbms_output.put_line(' Courses id : '||course_id||'      Courses Name : '||course_name||'      Courses Credits : '||course_credits);
			dbms_output.put_line('-----------------------------------------------------------------------------------------------');
		end loop;
	close courses_cursor;
end;