# Write a Python program to create a class and access the properties of the class using an object.

class stud():
    def __init__(self,name,subject):
        self.name = name
        self.subject = subject

s1 = stud("Hemanshi","Python")
print(f"Your Name : {s1.name}\nYour Subject : {s1.subject}")