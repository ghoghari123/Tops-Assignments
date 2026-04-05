# Write a Python program to show method overriding

class Animal:
    def sound(self):
        print("Animal Make A Sound")
class Cat(Animal):
    def sound(self):
        print("Cat Meow...")
obj1 = Animal()
obj2 = Cat()
obj1.sound()
obj2.sound()