# Write a Python program to print each fruit in a list using a simple for loop. List1 = ['apple', 'banana', 'mango']
List1 = ['apple','banana','mango']
for i in List1:
   print(i)



#  Write a Python program to find the length of each string in List1.
print("\n")
List1 = ['apple','banana','mango']
for i in List1:
   print(len(i),end=" ")



# Write a Python program to find a specific string in the list using a simple for loop and if condition.
print("\n")
List1 = ["apple","banana","mango","cherry","hello"]
find_str = input("\nEnter Your Search String : ")

for i in List1:
    if i == find_str:
      print(f"{find_str},Found this string in list")
      break
else:
    print(f"{find_str},We can't found this string in list")



# Print this pattern using nested for loop:
# markdown Copy code
# *
# **
# ***
# ****
# *****
print("\n")
for row in range(1,6):
    for col in range(1, row + 1):
        print(" * ",end=" ")
    print( )