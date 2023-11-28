#Day 8 - List Practice 
colors = ['blue', 'red', 'green', 'yellow', 'black', 'white'] 
moreColors = ['purple', 'magenta', 'pink']

#Remove red, green, and yellow 
del colors[1:4]
#print(colors)
# Add the entire moreColors array to the colors array using a single statement
colors.extend(moreColors)
#print(colors)
# Change to uppercase with list comprehension 
upper_colors = [x.upper() for x in colors]
#print(upper_colors)

# See if all items in list is greater than 0
numbers = [1, 2, 20, 60, 77]

# if all(num > 0 for num in numbers):
#     print(True)
# else:
#     print(False)

#Day 9 - List Methods
states = ['alaska', 'arkansas', 'missouri', 'texas', 'nevada', 'california'];
#filter to only select states that start with 'a'
#reduce each state to 3 characters  (ie “nevada” would turn into “nev”)
# add up the count of characters from the  remaining words
filterStates = list(filter(lambda state: state[0] == 'a', map(lambda state: state[:3], states)))

#print(len(filterStates) * 3)

#Day 10 - Loops
#Reverse loop
words = ['ant', 'awkward', 'car', 'zebra']
reversed_words = []
for i in range(len(words)-1, -1, -1):
    reversed_words.append(words[i])
#print(reversed_words)
#Reverse loop with method
words.reverse()
#print(words)

# Day 11 - Functions
# Write a function to get the difference between a given number and 27
#If the number is greater than 27 return double the absolute difference.

def twenty_seven(num):
    if num > 27:
        return abs(27 - num) * 2
    else:
        return 27 - num
    
#print(twenty_seven(42)) #30
#print(twenty_seven(2)) #25

#Write a function to compute the sum of the two given integers.
#If the two values are same, then returns triple their sum.
def sum_triple(x,y):
    if x == y:
        return (x + y)*3
    else:
        return x + y
    
#print(sum_triple(12,12)) #72
#print(sum_triple(25, 10)) #35

#Day 12 - Dictionary 
#See if john is a key in dictionary
grades = {
    'john': 15,
    'mark': 17,
    'jennifer': 18
}
if 'john' in grades:
    print(True) ##Answer = true
else:
    print(False)


