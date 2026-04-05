# Write a Python program to create a database and a table using SQLite3.

import pymysql

mydb = pymysql.connect(host="localhost",user="root",passwd="",port=3306)
mycursor = mydb.cursor()

mydb = pymysql.connect(host="localhost",user="root",password="",database="employee")
mycursor = mydb.cursor()
mycursor.execute("create table dept(dept_id int primary key auto_increment, dept_name varchar(100) not null)")
mydb.commit()