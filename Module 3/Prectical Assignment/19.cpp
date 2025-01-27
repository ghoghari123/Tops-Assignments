// Create a class BankAccount with data members like balance and member functionslike deposit and withdraw. Implement encapsulation by keeping the data members
// private.
// o Objective: Understand encapsulation in classes.
#include <iostream>
using namespace std;
class BankAccount
{
private:
    double account_no;
    double balance;

public:
    void set(double a, double b)
    {
        account_no = a;
        balance = b;
    }
    void Deposite(double d)
    {
        balance = balance + d;
    }
    void Widthdrawl(double w)
    {
        if (w < balance)
        {
            balance = balance - w;
        }
        else
        {
            cout << "Widthrawl Is Not Possible..!" << endl;
        }
    }
    void get()
    {
        cout << "Account Number: " << account_no << endl;
        cout << "Balance : " << balance << endl;
    }
};
int main()
{
    BankAccount b1, b2;
    b1.set(221326733, 20000);
    b1.Deposite(25000);
    b1.Widthdrawl(5000);
    b2.set(428293657, 20000);
    b2.Deposite(40000);
    b2.Widthdrawl(65000);

    b1.get();
    b2.get();

    return 0;
}