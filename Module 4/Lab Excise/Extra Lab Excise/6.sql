-- 6. DROP Command
--  Lab 3: Drop the publishers table from the database after verifying its structure.
--  Lab 4: Create a backup of the members table and then drop the original members table.

describe publishers;
drop table publishers;


create table backup_members as select * from members;
-- select * from backup_members;
drop table members;