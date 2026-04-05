-- 3. SQL Constraints
--  Lab 3: Add a CHECK constraint to ensure that the price of books in the books table is greater than 0.
--  Lab 4: Modify the members table to add a UNIQUE constraint on the email column, ensuring that each member has a unique email address.



alter table members  modify email varchar(50) unique;
-- describe  members;