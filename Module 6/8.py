# Write a Python program to skip 'banana' in a list using the continue statement. List1 = ['apple', 'banana', 'mango']
List1 = ['apple', 'banana', 'mango']
skip = "banana"
for i in List1:
    if i == skip:
        continue
    print(i,end=" ")

# Write a Python program to stop the loop once 'banana' is found using the break statement.
print("\n---------------------------------------------------------")
List1 = ['apple', 'banana', 'mango']
for i in List1:
    if i == "banana":
        break
    print(i,end=" ")