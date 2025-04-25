# Write a Python program to print "Hello" using a string
print("Hello")

#  Write a Python program to allocate a string to a variable and print it.
print("---------------------------------------------------------")
allocate_str = ("Hello!, How are you ?")
print(allocate_str)

# Write a Python program to print a string using triple quotes.
print("---------------------------------------------------------")
message = """
Hello!, Miss Hemanshi.
Welcome To Python Programming
"""
print(message)

# Write a Python program to access the first character of a string using index value.
print("---------------------------------------------------------")
str_name = "Hemanshi"
print(str_name)
print(f"Index OF \"{str_name}\" First Chacater Is : ",str_name.index("H"))

# Write a Python program to access the string from the second position onwards using slicing
print("---------------------------------------------------------")
name = "Hemanshi"
print(f"\"{name}\" to access the string from the second position is : ", name[2:])

# Write a Python program to access a string up to the fifth character
print("---------------------------------------------------------")
name = "Hello!, Hemanshi"
print(f"\"{name}\" to access a string up to the fifth character is : ", name[:5])

# Write a Python program to print the substring between index values 1 and 4.
print("---------------------------------------------------------")
str = "Python Programing"
print(f"\"{str}\" to print the substring between index values 1 and 4 is : ", str[1:4])

# Write a Python program to print a string from the last character.
print("---------------------------------------------------------")
str = "Python Programing"
print(f"\"{str}\" to print a string from the last character is : ", str[-1])

# Write a Python program to print every alternate character from the string starting from index 1.
print("---------------------------------------------------------")
str = "Python Programing"
print(f"\"{str}\" to print every alternate character from the string starting from index 1 is : ", str[1::2])