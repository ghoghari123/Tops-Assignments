# Write a Python program to convert two lists into one dictionary using a for loop.

keys = ["Nmae","CGPA","Subject","City","University"]
value = ["Hemanshi",7.63,"PYTHON","Surat","VNSGU"]

dict = {}

for i in range(len(keys)):
    dict[keys[i]] = value[i]

print(f"Marge the Two List and Convert Into Dictionary :\n {dict}")