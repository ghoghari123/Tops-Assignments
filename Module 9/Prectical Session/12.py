# Write a Python program to demonstrate the use of local and global variables in a class

Msg = "This Massage From Global Massage"
class local_gobal_varibles():
    def show_massage(self):
        msg = "This Massage From Local Massage"
        print(f"{msg}")
        print(f"{globals()['Msg']}")
        
obj = local_gobal_varibles()
obj.show_massage()