# Write a Python program to show single inheritance.

class A():
    def displayA(self):
        print("This Is Base Class")
class B(A):
    def displayB(self):
        print("This Is Derived Class")
obj = B()
obj.displayA()
obj.displayB()