-- 13. Transaction Control Language (TCL)
--  Lab 3: Use COMMIT after inserting multiple records into the books table, then make another insertion and perform a ROLLBACK.
--  Lab 4: Set a SAVEPOINT before making updates to the members table, perform some updates, and then roll back to the SAVEPOINT.

insert into books(book_id,title,author,publisher,year_of_publication,price) values 
(106,'The Invisible Man','H.G. Wells','Penguin Classics',2008,300),
(107,'To Kill a Mockingbird','Harper Lee','J.B. Lippincott & Co.',1960,99);
commit;
insert into books(book_id,title,author,publisher,year_of_publication,price) values 
(108,'The Hobbit','Homer','HarperOne',2015,800),
(109,'The Alchemist','Paulo Coelho','George Allen & Unwin',2020,199);
rollback;


savepoint before_update;
update members set email='amit_a@gmail.com' where member_id=101;
update members set email='nimit@gmail.com' where member_id=105;
rollback to savepoint before_update;