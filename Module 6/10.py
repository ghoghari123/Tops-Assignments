# Write a Python program to apply the map() function to square a list of numbers.
num = [1,2,3,4,5]
list2 = list(map(lambda n : n ** 2, num))
print(list2)
# Write a Python program that uses reduce() to find the product of a list of numbers.
print("\n---------------------------------------------------------")
from functools import reduce
product = [1,2,3,4,5]
product2 = reduce(lambda x, y : x * y, product)
print(product2)
# Write a Python program that filters out even numbers using the filter() function.
print("\n---------------------------------------------------------")
num = [1,2,3,4,5,6,7,8,9,10]
num2 = list(filter(lambda n : n % 2 == 0,num))
print(f"Print Even Number : {num2}")
