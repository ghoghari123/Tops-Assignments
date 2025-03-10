-- 12. REVOKE Command
--  Lab 3: Revoke the INSERT privilege from the user librarian on the books table.
--  Lab 4: Revoke all permissions from user admin on the members table.

revoke insert on books from librarian;

revoke select on members from admin;