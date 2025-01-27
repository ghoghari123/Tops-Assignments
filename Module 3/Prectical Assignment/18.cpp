// Write a C++ program that defines a class Calculator with functions for addition, subtraction, multiplication, and division. Create objects to use these functions.
// o Objective: Introduce basic classstructure.
#include <iostream>
using namespace std;
class Calculator
{
public:
    int sum(int n1, int n2)
    {
        return n1 + n2;
    }
    int sub(int n1, int n2)
    {
        return n1 - n2;
    }
    int mul(int n1, int n2)
    {
        return n1 * n2;
    }
    int div(int n1, int n2)
    {
        if (n1 != 0)
        {
            return (float)n1 / (float)n2;
        }
        else
        {
            cout << "Division By Zero Is Not Allowed";
            return 0;
        }
    }
};
int main()
{
    Calculator c;
    int n1, n2;
    cout << "Enter The Numerical Number Of N1 : ";
    cin >> n1;
    cout << "Enter The Numerical Number Of N2 : ";
    cin >> n2;

    cout << "The Addition Of " << n1 << " & " << n2 << " Is : " << c.sum(n1, n2) << endl;
    cout << "The Subtraction Of " << n1 << " & " << n2 << " Is : " << c.sub(n1, n2) << endl;
    cout << "The Multiplication Of " << n1 << " & " << n2 << " Is : " << c.mul(n1, n2) << endl;
    cout << "The Division Of " << n1 << " & " << n2 << " Is : " << c.div(n1, n2) << endl;
    return 0;
}