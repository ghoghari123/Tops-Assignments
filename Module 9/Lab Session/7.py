# Write a Python program to demonstrate handling multiple exceptions

def try_multiple_exceptions():
    
    try:
        n1 = int(input("Enter The Value Of N1 : "))
        n2 = int(input("Enter The Value Of N2 : "))
        
        result = n1 / n2 
        print(f"{n1} / {n2} = {result}")
    except ValueError:
        print("Error : Inavlid Input, Please Enter A Only Interger Number")
    except ZeroDivisionError:
        print("Error : Can Not Devided By Zero")
    except NameError:
        print("Error : A Variable Is Not Define")
    else:
        print("Operation Comelepetd Successfully....!")
    finally:
        print("Code Exicuted Successsfully..!")
        
try_multiple_exceptions()    
    