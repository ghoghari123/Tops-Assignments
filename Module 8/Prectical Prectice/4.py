# Write a Python program to remove elements from a list using pop() and remove()

list = ["Python","Php","Java","C/C++","MongoDB","JS"]
print(f"Before List : {list}")
list.remove("Php")
print(f"After Using remove() : {list}")
list.pop(1)
print(f"After Using pop() : {list}")
