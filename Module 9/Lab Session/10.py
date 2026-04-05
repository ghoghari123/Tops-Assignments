# Write Python programs to demonstrate method overloading and method overriding

print("[ 1 ] Method Overloaind")
class Overloading:
    def __init__(self,a,b):
        self.a = a
        self.b = b
    def __add__(self,other):
        return self.a - other.a, self.b - other.b

obj1 = Overloading(10,5)
obj2 = Overloading(3,2)

result = obj1 + obj2
print(f"Result : {result}")


print("---------------------------------------------------------")
print("\n[ 2 ] Methos Overriding")
class Animal:
    def sound(self):
        print("Animal Make A Sound")
class Dog(Animal):
    def sound(self):
        print("Dog Barks")
obj1 = Animal()
obj2 = Dog()
obj1.sound()
obj2.sound()