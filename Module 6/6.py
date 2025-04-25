# Write a generator function that generates the first 10 even numbers.
def generator():
    count = 0
    n = 1
    while count < 10:
        if n % 2 == 0:
            yield n
            count += 1
        n += 1
print(generator)
for gen in generator():
    print(gen)


# Write a Python program that uses a custom iterator to iterate over a list of integers.
