// Write a C++ program that calculates the factorial of a number using recursion.
// o Objective: Understand recursion in functions.
#include <iostream>
using namespace std;
int fact(int n1)
{
    if (n1 != 0)
    {
        return n1 * fact(n1 - 1);
    }
    else
    {
        return 1;
    }
}
int main()
{
    int n1, ans;
    cout << "Enter The Number For Find The Factorial Number: ";
    cin >> n1;
    ans = fact(n1);
    cout << "The Number Of " << n1 << " Factorial Is: " << ans;
    return 0;
}