// Write a C++ program that accepts user input for their name and age and then displays a personalized greeting.
// o Objective: Practice input/output operations using cin and cout.
#include <iostream>
using namespace std;
int main()
{
    string name;
    int age;

    cout << "Enter Your Name:";
    cin >> name;

    cout << "Enter Your Age:\t";
    cin >> age;

    cout << "Your Name Is " << name << "."<<endl;
    cout << "Your Age Is " << age << ".";
    return 0;
}