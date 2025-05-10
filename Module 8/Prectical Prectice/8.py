# Write a Python program to create a tuple with multiple data types. 

my_tuple = ("PYTHON",3.14,"JAVA",1,"C/C++",False,None,[10,20],{"Name":"Hemanshi"})
print(my_tuple)
print("\n")
for elemnt in my_tuple:
    print(f"{elemnt} --> {type(elemnt)}")