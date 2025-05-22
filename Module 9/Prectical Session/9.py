# Write a Python program to handle file exceptions and use the finally block for closing the file
try:
    f = open("My_File.txt","r")
    print(f.read())
except FileNotFoundError:
    print("The File Is Not Found..!")
finally:
    try:
        f.close()
        print("File Closed")
    except:
        print("File Wan Not Opend..!")