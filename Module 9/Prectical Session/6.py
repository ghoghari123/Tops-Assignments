# Write a Python program to check the current position of the file cursor using tell()

with open("My_File.txt","r") as f:
    print(f.read())
    
    position = f.tell() # returns the current byte offset from the beginning of the file
    print(f"Cuurent Coursor Position : {position}")