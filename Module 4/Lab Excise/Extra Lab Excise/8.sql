-- 8. UPDATE Command
--  Lab 3: Update the year_of_publication of a book with a specific book_id.
--  Lab 4: Increase the price of all books published before 2015 by 10%


update books set year_of_publication = 2020 where book_id=103;
update books set price = price*1.10 where year_of_publication < 2015;
-- select * from books;