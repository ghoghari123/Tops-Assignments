# Write Python programs to demonstrate different types of inheritance (single, multiple, multilevel, etc.)

print("""\n                      Inheritance Types                                               """)
# Simple Inheritance
print("[ 1 ] Simple Inheritance")
class A():
    def displayA(self):
        print("This Is Base Class")
class B(A):
    def displayB(self):
        print("This Is Derived Class")
obj = B()
obj.displayA()
obj.displayB()
print("\n----------------------------------------------------------------")

# Multilevel Inheritance
print("\n[ 2 ] Multilevel Inheritance")
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
print("\n----------------------------------------------------------------")

# Multiple Inheritance
print("\n[ 3 ] Multiple Inheritance")
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
print("\n----------------------------------------------------------------")

# Multilevel Inheritance
print("\n[ 4 ] Multilevel Inheritance")
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
print("\n----------------------------------------------------------------")

# Hierarchical Inheritance
print("\n[ 5 ] Hierarchical Inheritance")
class A:
    def add(self,n1,n2):
        return n1 + n2
class B():
    def mul(self,n3,n4):
        return n3 * n4
class C(A,B):
    def displayc(self,n1,n2,n3,n4):
       add_ans = self.add(n1,n2)
       mul_ans = self.mul(n3,n4)
       print(f"{n1} + {n2} : {add_ans}")
       print(f"{n3} * {n4} : {mul_ans}")
c = C()
c.displayc(20,10,5,6)
print("\n----------------------------------------------------------------")

# Hybrid Inheritance
print("\n[ 3 ] Hybrid Inheritance")
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
