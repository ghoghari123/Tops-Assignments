# Write a Python program to search for a word in a string using re.search()

import re
txt = "The dog barked loudly at the strange"
word = "loudly"
pattern =  re.escape(word)
match = re.search(pattern, txt)

if match:
    print (f" '{word}' Is Found In The String")
else:
    print (f" '{word}' Is Not Found In The String")