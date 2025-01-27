// Write a C++ program to display the multiplication table of a given number using a for loop.
// o Objective: Practice using loops.
#include <iostream>
using namespace std;
int main()
{
    
    int n1;
    cout<<"Enter The Value Of N1: ";
    cin>>n1;
    for (int i = 1; i <= 10; ++i)
    {
        cout << n1 << " * " << i << " = " << n1 * i << endl;
    }
    return 0;
}