# Write a Python program to count how many times each character appears in a string.

string = "Python Programming"
d = {}
for char in string:
    d[char] = string.count(char)
print(f"{d}")