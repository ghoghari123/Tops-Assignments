# Write a Python program to create a class and access its properties using an object

class MyClass():
    def __init__(self,name,age):
        self.name = name
        self.age = age
        
obj = MyClass("Delasi",21)
print(f"Name : {obj.name}")
print(f"Age  : {obj.age}")