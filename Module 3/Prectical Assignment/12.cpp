// Write a C++ program that defines functions for basic arithmetic operations (add,subtract, multiply, divide). The main function should call these based on user input.
// o Objective: Practice defining and using functions in C++.
#include <iostream>
using namespace std;
void arthmetic_operation()
{
    int n1, n2, result;
    char ch;
    cout << "Enter The Numerical Value Of N1: ";
    cin >> n1;
    cout << "Enter The Numerical Value Of N2: ";
    cin >> n2;

    cout << "Enter '+' ,  '-' ,  '*' ,  '/'" << endl;
    cout << "Enter Your Choice : ";
    cin >> ch;
    switch (ch)
    {
    case '+':
        result = n1 + n2;
        cout << "The Addition Of " << n1 << " + " << n2 << " Is : " << result;
        break;
    case '-':
        result = n1 - n2;
        cout << "The Subtraction Of " << n1 << " - " << n2 << " Is : " << result;
        break;
    case '*':
        result = n1 * n2;
        cout << "The Multiplication Of " << n1 << " * " << n2 << " Is : " << result;
        break;
    case '/':
        result = n1 / n2;
        cout << "The Division Of " << n1 << " / " << n2 << " Is : " << result;
        break;
    default:
        cout << "Invalid Operation..!";
        break;
    }
}
int main()
{
    arthmetic_operation();
    return 0;
}