// Write a C++ program to check if a given string is a palindrome (reads the sameforwards and backwards).
// o Objective: Practice string operations.
#include <iostream>
using namespace std;
int main()
{
    string s1, temp;
    cout << "Enter The String Name: ";
    getline(cin, s1);
    temp = s1;
    int i, length = 0, j = 0;
    char str[100];
    for (i = 0; s1[i] != '\0'; i++)
    {
        length++;
    }
    for (i = length - 1; i >= 0; i--)
    {
        str[j] = s1[i];
        j++;
    }

    if (temp == str)
    {
        cout << "The String Is Pellindrom..!";
    }
    else
    {
        cout << "The String Is Not Pellindrom..!";
    }

    return 0;
}