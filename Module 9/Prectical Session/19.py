# Write a Python program to show method overloading

class Method_Overloading:
    def __init__(self,a,b):
        self.a = a
        self.b = b
    def __add__(self,other):
        return self.a + other.a, self.b - other.b

obj1 = Method_Overloading(54,55)
obj2 = Method_Overloading(10,20)

result = obj1 + obj2
print(f"Result : {result}")