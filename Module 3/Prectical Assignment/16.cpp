// Write a C++ program to perform matrix addition on two 2x2 matrices.
// o Objective: Practice multi-dimensional arrays.
#include <iostream>
using namespace std;
int main()
{
    int a[100][100], b[100][100], ans[100][100];
    int size, i, j, k;
    char ch;
    cout << "Enter The Size Of An Array: ";
    cin >> size;

    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            cout << "Enter The Elements Of An Array A[" << i << "][" << j << "] : ";
            cin >> a[i][j];
        }
    }
    cout << endl;
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            cout << "Enter The Elements Of An Array B[" << i << "][" << j << "] : ";
            cin >> b[i][j];
        }
    }
    cout << "The Array Of A Is :" << endl;
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            cout << a[i][j] << " ";
        }
        cout << "\n";
    }
    cout << "The Array Of B Is :" << endl;
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            cout << b[i][j] << " ";
        }
        cout << "\n";
    }
    cout << "Enter + For Addition Of 2*2 Matrix" << endl;
    cout << "Enter * For Addtition Of 2*2 Matrix" << endl;
    cout << "Enter Your Choice : ";
    cin >> ch;
    switch (ch)
    {
    case '+':
        // cout << "The Sum Of The Array  A & B Is :" << endl;
        for (i = 0; i < size; i++)
        {
            for (j = 0; j < size; j++)
            {
                ans[i][j] = a[i][j] + b[i][j];
            }
        }
        for (i = 0; i < size; i++)
        {
            for (j = 0; j < size; j++)
            {
                cout << ans[i][j] << " ";
            }
            cout << "\n";
        }
        break;
    case '*':
        // cout << "The Multiplication Of The Array  A & B Is :" << endl;
        for (i = 0; i < size; i++)
        {
            for (j = 0; j < size; j++)
            {
                for (k = 0; k < size; k++)
                {
                    ans[i][j] = ans[i][j] + (a[i][k] * b[k][j]);
                }
            }
        }
        for (i = 0; i < size; i++)
        {
            for (j = 0; j < size; j++)
            {
                cout << ans[i][j] << " ";
            }
            cout << "\n";
        }
        break;
    default:
        cout << "Error!Invalid Choice";
        break;
    }

    return 0;
}