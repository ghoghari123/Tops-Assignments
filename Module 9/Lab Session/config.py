# import pymysql
import pymysql
# connect with localhost
mydb = pymysql.connect(host="localhost",user="root",password="",port=3306)
mycursor = mydb.cursor()
# craete database
mycursor.execute("create database if not exists employee")
mydb.commit()

# create table
mydb = pymysql.connect(host="localhost",user="root",password="",database="employee")
mycursor = mydb.cursor()
mycursor.execute("create table emp(e_id int primary key auto_increment, e_name varchar(100), dept_name varchar(50), salary float)")
mydb.commit()