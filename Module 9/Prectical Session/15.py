# Write a Python program to show multiple inheritance

class A():
    def displayA(self):
        print("This Is Parent1 Class")
class B():
    def displayB(self):
        print("This Is Parent2 Class")
class C(A,B):
    def displayC(self):
        print("This Is Child Class")
obj = C()
obj.displayA()
obj.displayB()
obj.displayC()