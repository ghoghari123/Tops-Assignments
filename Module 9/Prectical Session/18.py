# Write a Python program to demonstrate the use of super() in inheritance

class Parent():
    def show(self):
        print("This Is The Parent Class")
class Child():
    def show(self):
        super.show()
        print("This Is The Base Class")
obj = Child()
obj.show()
