# Write a Python program to create a calculator using functions

def add(n1,n2):
    return n1 + n2
def sub(n1,n2):
    return n1 - n2
def mul(n1,n2):
    return n1 * n2
def div(n1,n2):
    if n2 == 0:
        return "Error..!You can't Digits Divided By Zero"
    return n1 / n2

n1 = int(input("Enter The Value Of N1 : "))
n2 = int(input("Enter The Value Of N2 : "))
def cal():
    print("Select Operation")
    print("press 1 --> Addition")
    print("Press 2 --> Subtraction")
    print("Press 3 --> Multiplication")
    print("Press 4 --> Division")
    ch = input("Enter Your Choice : ")

    if ch == '1':
        print(f"{n1} + {n2} = {add(n1,n2)}")
    elif ch == '2':
        print(f"{n1} - {n2} = {sub(n1,n2)}")
    elif ch == '3':
        print(f"{n1} * {n2} = {mul(n1,n2)}")
    elif ch == '4':
        print(f"{n1} / {n2} = {float(div(n1,n2))}")
    else:
        print("Operation Invalid..!")
cal()