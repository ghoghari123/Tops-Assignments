// Write a C++ program that demonstrates the use of variables and constants. Create variables of different data types and perform operations on them.
// o Objective: Understand the difference between variables and constants.
#include <iostream>
using namespace std;
#define n1 20 // const decalration
int main()
{
    // Intger Data Type
    cout << "The Intger Numerical Value Of N1 Is: " << n1 << endl;

    // Float Data Type parameter type and parameter name
    float n2;
    cout << "\nEnter Float The Numerical Value Of N2: ";
    cin >> n2;
    cout << "The Float Numerical Value Of N2 Is: " << n2 << endl;

    // Character Data Type With const decalration
    char const c = 'A';
    cout << "\nThe Character  Of C Is: " << c;

    // String Data Type
    string str = "Hellow! How Are You?";
    cout << "\nThe Value Of String: " << str << endl;

    // Boolean Data Type
    bool b1 = true;
    bool b2 = false;
    cout << "The Value Of Boolean B1: " << b1 << endl;
    cout << "The Value Of Boolean B2: " << b2;
    return 0;
}