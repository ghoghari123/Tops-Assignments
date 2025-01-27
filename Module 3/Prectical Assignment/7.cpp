// Write a C++ program that demonstrates arithmetic, relational, logical, and bitwise operators. Perform operations using each type of operator and display the results.
// o Objective: Reinforce understanding of different types of operatorsin C++.
#include <iostream>
using namespace std;
int main()
{
    int n1, n2, ans;
    cout << "Enter The Numerical Value Of N1: ";
    cin >> n1;
    cout << "Enter The Numerical Value Of N2: ";
    cin >> n2;

    // Arithmatic Operation
    cout << "Arithmatic Operation...!" << endl;
    ans = n1 + n2;
    cout << "The Addition Of " << n1 << " + " << n2 << " is : " << ans << endl;
    ans = n1 - n2;
    cout << "The Subtraction Of " << n1 << " - " << n2 << " is : " << ans << endl;
    ans = n1 * n2;
    cout << "The Multipliction Of " << n1 << " * " << n2 << " is : " << ans << endl;
    ans = n1 / n2;
    cout << "The Division Of " << n1 << " / " << n2 << " is : " << ans << endl;
    ans = n1 % n2;
    cout << "The Remoinder Of " << n1 << " % " << n2 << " is : " << ans << endl;

    // Relational Operation
    cout << "\n\nRelational Operations...!";
    cout << "\nThe Eqale Relational Operater  " << n1 << " == " << n2 << " Is : " << (n1 == n2) ? "True" : "False";
    cout << "\nThe Not Eqale Relational Operater  " << n1 << " != " << n2 << " Is : " << (n1 != n2) ? "True" : "False";
    cout << "\nThe Greater Than Relational Operater  " << n1 << " > " << n2 << " Is : " << (n1 > n2) ? "True" : "False";
    cout << "\nThe Less Than Relational Operater  " << n1 << " < " << n2 << " Is : " << (n1 < n2) ? "True" : "False";

    // Logical Operation
    cout << "\n\nLogical Operations...!";
    cout << "\nThe && Logical Operater  " << n1 << " == " << n2 << " Is : " << (n1 > 0 && n2 > 0) ? "True" : "False";
    cout << "\nThe || Logical Operater  " << n1 << " != " << n2 << " Is : " << (n1 > 0 || n2 > 0) ? "True" : "False";
    cout << "\nThe ! Logical Operater  " << n1 << " > " << n2 << " Is : " << !(n1 > n2) ? "True" : "False";

    // Bitwise  Operation
    cout << "\n\nBitwise Operations...!";
    cout << "\nThe & Bitwise Operater  " << n1 << " == " << n2 << " Is : " << (n1 > 0 & n2 > 0) ? "True" : "False";
    cout << "\nThe | Bitwise Operater  " << n1 << " != " << n2 << " Is : " << (n1 > 0 | n2 > 0) ? "True" : "False";
    cout << "\nThe >> Bitwise Operater  " << n1 << " > " << n2 << " Is : " << !(n1 >> n2) ? "True" : "False";
    cout << "\nThe << Bitwise Operater  " << n1 << " > " << n2 << " Is : " << !(n1 << n2) ? "True" : "False";

    return 0;
}