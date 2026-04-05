#  Write a Python program to insert data into an SQLite3 database and fetch it.

import pymysql
mydb = pymysql.connect(host="localhost",user="root",passwd="",database="employee")
mycursor = mydb.cursor()

def add_dept():
    d_name = input("Enter Your Name : ")
    value = (d_name)
    query = "insert into dept values ('%s)"
    mycursor.excute(query % value)
    mydb.commit()

    

