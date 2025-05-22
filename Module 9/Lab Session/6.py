# Write a Python program to handle exceptions in a simple calculator (division by zero, invalid input).

def simple_cal():
    print("Simple Calculater")
    menu = """
              Operations :   
              Press + For Addition
              Press - For Subtraction
              Press * For Multiplication
              Press / For Division
    """
    
    try:
        n1 = float(input("Enter The Value Of N1 : "))
        n2 = float(input("Enter The Value Of N2 : "))
        print(menu)
        ch = input("Enter Your Choice : ")
        
        if ch == '+':
            ans = n1 + n2
        elif ch == '-':
            ans = n1 - n2
        elif ch == '*':
            ans = n1 * n2
        elif ch == '/':
            ans = n1 / n2
        else:
            print("Error : Invalid Opeater!")
            return
        print(f"Result : {ans}")
    except ZeroDivisionError:
        print("Error : You can not divided byko zero!")
    except ValueError:
        print("Invalid Input! Please Enter Number Only!")
    except Exception as e:
        print(f"Unexpected Error : {e}")
        
simple_cal()
        