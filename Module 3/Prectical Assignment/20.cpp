// Write a program that implements inheritance using a base class Person and derived classes Student and Teacher. Demonstrate reusability through inheritance.
// o Objective: Learn the concept of inheritance.

#include <iostream>
using namespace std;
class Person
{
private:
    string name, course;
    int age;

public:
    void Set(string n, int a, string c)
    {
        name = n;
        age = a;
        course = c;
    }
    void Infomation()
    {
        cout << "Name : " << name << endl;
        cout << "Age : " << age << endl;
        cout << "Course Name : " << course << endl;
    }
};
class Student : public Person
{
private:
    double stud_id;

public:
    void setstud_id(double id)
    {
        stud_id = id;
    }
    void stude_info()
    {
        cout << "Student_Id : " << stud_id << endl;
    }
};
class Teacher : public Person
{
private:
    double emp_id;

public:
    void setemp_id(double id)
    {
        emp_id = id;
    }
    void emp_info()
    {
        cout << "Employee_Id : " << emp_id << endl;
    }
};
int main()
{
    Student s1;
    s1.setstud_id(322341);
    s1.Set("Delasi_Patel", 21, "C++");
    Teacher t1;
    t1.setemp_id(117132);
    t1.Set("Mr Ridham Sir", 25, "C++");

    cout << "Display The Student Information" << endl;
    s1.stude_info();
    s1.Infomation();

    cout << "Display The Employess Infomation" << endl;
    t1.emp_info();
    t1.Infomation();
    return 0;
}