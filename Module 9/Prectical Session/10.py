# Write a Python program to print custom exceptions.

class MyCustomError(Exception):
    pass

def check_number(n):
    if n % 2 != 0:
        raise MyCustomError("The Odd Number")
    else:
        print(f"{n} Is Even : ")
        
try:
    n = int(input("Enter The Value Of N1 : "))
    check_number(n)
except MyCustomError as e:
    print(f"Custom Exception Caught : {e}")