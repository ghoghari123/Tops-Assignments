# Write a Python program to access alternate values between index 1 and 5 in a tuple

my_tuple = ("PYTHON",3.14,"JAVA",1,"C/C++",False,None,[10,20],{"Subject":"PYTHON"})
print(my_tuple)
slice_tuple = my_tuple[1:6:2]
print(f"Accesing Value Between Index 1 & 5 In A Tuple List : {slice_tuple}")