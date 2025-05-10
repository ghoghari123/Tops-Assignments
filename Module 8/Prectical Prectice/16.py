# Write a Python program to separate keys and values from a dictionary using keys() and values() methods. 

Stud_Info = {
    "Name" : "Hemanshi",
    "CGPA" : 7.64,
    "Graduation" : "Distinction",
    "Course" : "Full Stack Development",
    "Currently Working" : "PHP",
    "Batch" : "Morning",
    "City" : "Surat",
    "Status" : "Active"
}

keys = Stud_Info.keys()
value = Stud_Info.values()
print(Stud_Info)
print(f"Keys : {keys}")
print(f"Value : {value}")