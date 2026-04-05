# Write a Python program to show multilevel inheritance

class A():
    def displayA(self):
        print("This Is Base Class")
class B(A):
    def displayB(self):
        print("This Is Child Class")
class C(A):
    def displayC(self):
        print("This Is Grandchild Class")
obj = B()
obj.displayA()
obj.displayB()
obj2 = C()
obj2.displayC()
obj2.displayA()