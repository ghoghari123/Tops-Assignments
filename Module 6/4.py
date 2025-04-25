# Write a Python program to find greater and less than a number using if_else.
n1 = int(input("Enter The Number 1 : "))
n2 = int(input("Enter The Number 2 : "))
if n1 > n2:
    print(f"N1({n1}) Is Greater Number N2({n2})")
else:
    print(f"N2({n2}) Is Greater Number N1({n1})")



# Write a Python program to check if a number is prime using if_else.
n = int(input("Enter The Numerical Value Of N : "))

if n > 1:
    for i in range(2,n):
        if n % i == 0:
            print(f"{n} Is not prime number")
            break
    else:
        print(f"{n} Is a prime number")
else:
    print(f"{n} Is not Prime Number")

# Write a Python program to calculate grades based on percentage using if-else ladder.
percet = int(input("Enter The Percantage Number : "))
if percet >= 90:
    print("Grade : A")
elif percet > 70 and percet <= 89 :
    print("Grade : B")
elif percet > 60 and percet <= 69 :
    print("Grade : C")
elif percet > 40 and percet <= 59 :
    print("Grade : D")
else:
    print("Grade : E")


# Write a Python program to check if a person is eligible to donate blood using a nested if.
name = input("Enter Your Name : ")
age = int(input("Enter Your Age : "))
weight = float(input("Enter Weight : "))

if age >= 18:
    if weight >= 50:
        print(f"Hello!,{name} You are eligible to donate blood")
    else:
        print(f"Hello!,{name} You are not eligible to donate blood becuse of your weight are not 50 up")
else:
    print(f"Hello!,{name} You are not eligible to donate blood becuse of your age are not 18 up")
