# Write a Python program to match a word in a string using re.match()
import re
txt = "Say Hello world, this is Python"
word = "Hel" 
pattern =  re.escape(word)
match = re.match(pattern, txt) # its match with begging words

if match:
    print (f" '{word}' Is Match In The String")
else:
    print (f" '{word}' Is Not Match In The String")