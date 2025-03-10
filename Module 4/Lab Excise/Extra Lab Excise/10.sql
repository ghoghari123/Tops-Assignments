-- 10. Data Query Language (DQL)
--  Lab 4: Write a query to retrieve all books with price between $50 and $100.
--  Lab 5: Retrieve the list of books sorted by author in ascending order and limit the results to the top 3 entries.

select * from books where price > 50 and price < 100;

select * from books order by author desc limit 3;
