#Day 8 - List Practice 
colors = ['blue', 'red', 'green', 'yellow', 'black', 'white'] 
moreColors = ['purple', 'magenta', 'pink']

#Remove red, green, and yellow 
del colors[1:4]
print(colors)
# Add the entire moreColors array to the colors array using a single statement
colors.extend(moreColors)
print(colors)
# Change to uppercase with list comprehension 
upper_colors = [x.upper() for x in colors]
print(upper_colors)

# See if all items in list is greater than 0
numbers = [1, 2, 20, 60, 77]

if all(num > 0 for num in numbers):
    print(True)
else:
    print(False)