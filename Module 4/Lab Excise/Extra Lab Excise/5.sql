-- 5. ALTER Command
--  Lab 3: Add a new column genre to the books table. Update the genre for all existing records.
--  Lab 4: Modify the members table to increase the length of the email column to 100 characters.

alter table books add column genre varchar(50);
update books set genre='Fication' where book_id = 101;
update books set genre='Poetry' where book_id = 102;
update books set genre='Drama' where book_id = 103;
update books set genre='Fication' where book_id = 104;
update books set genre='Drama' where book_id = 105;


alter table members modify email varchar(100);