# Write a Python program to show hierarchical inheritance
class A:
    def sub(self,n1,n2):
        return n1 - n2
class B():
    def div(self,n3,n4):
        return n3 / n4
class C(A,B):
    def displayc(self,n1,n2,n3,n4):
       sub_ans = self.sub(n1,n2)
       div_ans = self.div(n3,n4)
       print(f"{n1} - {n2} : {sub_ans}")
       print(f"{n3} / {n4} : {div_ans}")
c = C()
c.displayc(20,10,5,6)