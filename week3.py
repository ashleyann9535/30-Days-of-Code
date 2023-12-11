#Day 15
#Remove symbols from string
import re

def remove_symbols(word):
    new_word = re.sub("[^A-Za-z]"," ",word)

    return new_word

#print(remove_symbols('he!!o')) #he  o

#Day 16
#Return the longest string from a list
test_list = ['hello', 'code', 'practice', 'fun']

def length_elements(element):
    return len(element)

test_list.sort(key=length_elements)

#print(test_list[len(test_list)-1])

#Day 17
#Create a function that takes any number. Add 1 to each of the digits of the  number 
#and return that value
def add_to_digits(num):
    new_num = ''

    for n in str(num):
        new_num += str(int(n)+1)

    return new_num

print(add_to_digits(678)) # 789
print(add_to_digits(998)) # 10109