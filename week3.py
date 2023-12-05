#Day 15
#Remove symbols from string
import re

def remove_symbols(word):
    new_word = re.sub("[^A-Za-z]"," ",word)

    return new_word

print(remove_symbols('he!!o')) #he  o