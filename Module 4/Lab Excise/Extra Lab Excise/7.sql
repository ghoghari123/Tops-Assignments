-- 7. Data Manipulation Language (DML)
--  Lab 4: Insert three new authors into the authors table, then update the last name of one of the authors.
--  Lab 5: Delete a book from the books table where the price is higher than $100.

insert into authors(author_id,first_name,last_name,country) values
(106,'Priyam','Prajapti','Canada'),
(107,'Rinkal','Dave','UK'),
(108,'Dipesh','Ambani','India');
update authors set last_name = 'Desuza' where author_id=108;
-- select * from authors;


delete from books where price > 100;
-- select * from books;