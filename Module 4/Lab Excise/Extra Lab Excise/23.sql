-- 23. Rollback and Commit Savepoint
--  Lab 3: Perform a transaction that includes inserting a new member, setting a SAVEPOINT, and rolling back to the savepoint after making updates.
--  Lab 4: Use COMMIT after successfully inserting multiple books into the books table, then use ROLLBACK to undo a set of changes made after a savepoint.


insert into members(member_id,member_name,date_of_membership,email) values
(106,'Tnisha Vekriya','2020-10-28','TnishV@gmail.com'),
(107,'Jiya Gupta','2025-12-10','GJiya@gmail.com');
-- select * from members;
savepoint before_update;
update books set price = price*1.10 where genre = 'Fiction';
rollback to savepoint before_update;
commit;


insert into books(book_id,title,author,publisher,year_of_publication,author_id,price,genre) values 
(107,'The Book Thief',null,'Picador',2010,106,100,'Fiction'),
(108,'Moby Dick','Herman Melville','Richard Bentley',2025,107,50,'Poetry'),
(109,'The Odyssey',null,'Penguin Classics',2020,108,199,'Drama');
-- select * from books;
commit;
savepoint before_update;
update books set publisher = 'Penguin Classics' where book_id = 108;
-- show triggers;
rollback to savepoint before_update;
commit;


