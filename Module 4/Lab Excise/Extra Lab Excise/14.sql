-- 14. SQL Joins
--  Lab 3: Perform an INNER JOIN between books and authors tables to display the title of books and their respective authors' names.
--  Lab 4: Use a FULL OUTER JOIN to retrieve all records from the books and authors tables, including those with no matching entries in the other table.

select b.title,a.first_name,a.last_name from books b inner join authors a on b.author_id=a.author_id;

select * from books b left join authors a on b.author_id=a.author_id 
union
select * from books b right join authors a on b.author_id=a.author_id;
