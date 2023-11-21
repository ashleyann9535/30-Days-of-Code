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
print(reversed_words)
#Reverse loop with method
words.reverse()
print(words)