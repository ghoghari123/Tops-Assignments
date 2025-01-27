// Write a C++ program that accepts an array of integers, calculates the sum and average, and displays the results.
// o Objective: Understand basic array manipulation.
#include <iostream>
using namespace std;
int main()
{
    int a[100], size, i, sum = 0;

    cout << "Enter The Size Of An Array : ";
    cin >> size;

    for (i = 0; i < size; i++)
    {
        cout << "Enter The Array Elements [" << i << "] : ";
        cin >> a[i];
        sum = sum + a[i];
    }
    cout << "The Sum Of The Array Is : " << sum << endl;
    cout << "The Average Of The Array Is : " << (float)sum / (float)size;

    return 0;
}