
// Write two small programs: one using Procedural Programming (POP) to calculate the area of a rectangle, and another using Object-Oriented Programming (OOP) with a
// class and object for the same task.
// o Objective: Highlight the difference between POP and OOP approaches.
#include <iostream> 
using namespace std;
int main()
{
    int length, weight, ans;
    cout << "Enter The Number Of Length:\t";
    cin >> length;
    cout << "Enter The Number Of Weight:\t";
    cin >> weight;

    ans = length * weight;

    cout << "The Area Of Rectangle Is : " << ans;

    return 0;
}