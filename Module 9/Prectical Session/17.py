# Write a Python program to show hybrid inheritance.

class A:
    def displaya(self):
        print("Class A")
class B(A):
    def displayb(self):
        print("Class B")
class D(B):
    def displayd(self):
        print("Class D")
class C(A):
    def displayc(self):
        print("Class C")
obj = D()
obj.displaya()
obj.displayb()
obj.displayd()
        
C = C()
C.displaya()
C.displayc()