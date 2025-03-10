-- 11. Data Control Language (DCL)
--  Lab 3: Grant SELECT permission to a user named librarian on the books table.
--  Lab 4: Grant INSERT and UPDATE permissions to the user admin on the members table.

grant select on books to librarian;

grant insert,update on members to admin;