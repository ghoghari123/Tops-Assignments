# Write a Python program to merge two lists into one dictionary using a loop.

keys = ["Nmae","CGPA","Subject"]
value = ["Hemanshi",7.63,"PYTHON"]

dict = {}

for i in range(len(keys)):
    dict[keys[i]] = value[i]

print(dict)