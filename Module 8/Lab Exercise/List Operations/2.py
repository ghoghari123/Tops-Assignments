#  Write a Python program to remove elements from a list using pop() and remove().

list1 = ["Hello",1,2,3.14,"subject","Python",True,'H']
print(list1)
list1.pop() # using for remove element, it by default remove last element
print(f"after using pop() : {list1}")
list1.remove(2) # remove specific element
print(f"after using remove() : {list1}")