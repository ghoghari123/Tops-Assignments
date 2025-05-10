# Write a Python program to create a list with elements of multiple data types (integers, strings, floats, etc.)

Element_list1 = ["Hello",[1,2],3.14,{"subject":"Python"},True,'H']
print(Element_list1)

print("Elements With Data Type")
for element in Element_list1:
    print(f"{element} --> {type(element)}")
