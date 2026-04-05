-- 2. SQL Syntax
--  Lab 3: Retrieve all members who joined the library before 2022. Use appropriate SQL syntax with WHERE and ORDER BY.
--  Lab 4: Write SQL queries to display the titles of books published by a specific author. Sort the results by year_of_publication in descending order.

select * from members where date_of_membership >= '2022-01-01' order by  date_of_membership;

select title from books where author='Harper Adiga' order by year_of_publication desc;