-- 9. DELETE Command
--  Lab 3: Remove all members who joined before 2020 from the members table.
--  Lab 4: Delete all books that have a NULL value in the author column.


delete from members where date_of_membership < '2020-01-01';
-- select * from members;

delete from books where author is null;
select * from books;