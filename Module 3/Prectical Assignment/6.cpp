// Write a C++ program that performs both implicit and explicit type conversions and prints the results.
// o Objective: Practice type casting in C++.
#include <iostream>
using namespace std;
int main()
{
    // Implicit Type Conversion
    int n1 = 10;
    cout << "The Implicit Type Conversion Is : " << n1;
    // Explicit Type Conversion
    cout << endl << "--------------------------";
    float n2 = 20.40;
    double e = (int)n2;
    cout << "\nExplicit Type Conversion (C-style cast):" << endl;
    cout << "Orignal value Of N2 Is: " << n2 << endl;
    cout << "The Explicit Type Conversion Is : " << e;
    return 0;
}