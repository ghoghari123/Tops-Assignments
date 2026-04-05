# Write a Python program to connect to an SQLite3 database, create a table, insert data, and fetch data

import pymysql
mydb = pymysql.connect(host="localhost",user="root",password="",database="employee")
mycursor = mydb.cursor()


def add_emp():
    e_name = input("Enter Employee Name : ")
    dept_name = input("Enter Employee Departmate Name : ")
    salary = float(input("Enter Salary : "))

    value = (e_name,dept_name,salary)
    query = "insert into emp (e_name,dept_name,salary) values('%s','%s','%s')"
    mycursor.execute(query % value)
    mydb.commit()

def serach_emp():
    e_id = int(input("Enter Employee Id : "))
    value = (e_id)
    query = "select * from emp where e_id = '%s'"
    mycursor.execute(query,value)
    result = mycursor.fetchone()
    if result:
        print(f"Employee Id : {result[0]}")
        print(f"Employee Name : {result[1]}")
        print(f"Employee Departmate : {result[2]}")
        print(f"Employee Salary : {result[3]}")
    else:
        print("Employee Is Not Found....!")

def view_all_emp():
    query = "select * from emp"
    mycursor.execute(query)
    res = mycursor.fetchall()
    for i in res:
        print(i)

satus = True
while satus:
    Menu = """
              -------------------- Operations -------------------------
              [ 1 ] Add Employess
              [ 2 ] Search Employes
              [ 3 ] View All Employee
    """
    print(Menu)

    ch = input("Entetr Your Choice : ")
    if ch == '1':
        add_emp()
    elif ch == '2':
        serach_emp()
    elif ch == '3':
        view_all_emp()
    else:
        print("Operation Is Invalid....!")

    c = input("do you want to continue to this operation Enter 'y' for yes & 'n' for no : ").capitalize()
    if c == 'y' or c == 'Y':
        satus = True
    else:
        print("............ The End ...........")
        satus = False
