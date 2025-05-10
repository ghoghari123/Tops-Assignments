#  Write a Python program to access elements at different index positions.

Element_list1 = ["Hello",[1,2],3.14,{"subject":"Python"},True,'H']
print(Element_list1)

print("Element Access At Different Index Position")
print("Index Number ")
for index in range(len(Element_list1)):
    print(f"\t{index} -->\t {Element_list1[index]}")