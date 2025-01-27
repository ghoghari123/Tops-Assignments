// Write a program that asks for two numbers and displays their sum. Ensure this is done after setting up the IDE (like Dev C++ or CodeBlocks).
// o Objective: Help students understand how to install, configure, and run programs inan IDE.

#include <iostream>
using namespace std;
int main()
{
    int n1, n2, result;
    cout << "Enter The First Number: ";
    cin >> n1;
    cout << "Enter The Second Number: ";
    cin >> n2;

    result = n1 + n2;

    cout << "The Addition Of " << n1 << " & " << n2 << " Is : " << result;
    return 0;
}