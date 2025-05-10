# Write a Python program to update a value at a particular key in a dictionary

Stud_Info = {
    "Name" : "Hemanshi",
    "Age" : 22,
    "Course" : "Full Stack Development",
    "Currently Working" : "PHP",
    "Batch" : "Morning",
    "City" : "Surat",
    "Status" : "Active"
}

print(f"Original Dictionary :\n {Stud_Info}")
print("\n")
Stud_Info["City"] = "Amhedabad"
Stud_Info["Name"] = "Delsi"

print(f"After The Updating The Dictionary :\n {Stud_Info}")