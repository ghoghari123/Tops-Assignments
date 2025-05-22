# Write Python programs to demonstrate different types of inheritance (single, multiple, multilevel, etc.)

# Simple Inheritance
class A():
    def displayA(self):
        print("This Is Base Class")
class B(A):
    def displayB(self):
        print("This Is Derived Class")
obj = B()
obj.displayA()
obj.displayB()
