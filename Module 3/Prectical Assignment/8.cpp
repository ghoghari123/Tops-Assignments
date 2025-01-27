// Write a C++ program that takes a student’s marks as input and calculates the grade based on if-else conditions.
// o Objective: Practice conditional statements(if-else).
#include <iostream>
using namespace std;
int main()
{
    int roll_num = 101;
    string str = "Delasi";
    int C_programing = 57, Python = 80, PHP = 93;

    cout << "\nThe Roll Number Of Student:\t" << roll_num;
    cout << "\nStudent Name :\t" << str;
    cout << "\nThe Marks  Of Student:\t" << C_programing;
    cout << "\nThe Marks  Of Student:\t" << Python;
    cout << "\nThe Marks  Of Student:\t" << PHP;
    int ans = C_programing + Python + PHP;

    cout << "\nThe Totall Marks Of All Subjects:\t" << ans;

    float per;
    per = (float)ans / (float)3;
    cout << "\nPercantage:\t" << per;

    if (per >= 1 && per <= 45)
    {
        cout << "\nGrade: C";
    }
    else if (per >= 46 && per <= 80)
    {
        cout << "\nGrade: B";
    }
    else
    {
        cout << "\nGrade: A";
    }

    return 0;
}