# #Day 1 - Reverse a string with built in function 
# str1 = 'Novak is a GREAT tennis player'

# new_str = "".join(reversed(str1))

# #print(new_str)

# #Day 2 - Reverse string without built in function 
# rev_str = str1[::-1]

# #print(rev_str)

# #Day 3 - Find if second string contains any portion of the first string
# sport = 'tennis'
# #if substring is in full string
# if sport in str1:
#     print(True)
# else:
#     print(False)


# # Day 4 - Return the factorial of an integer
# fact = 1
# for num in range(1,6):
#     fact *= num

# print(fact)

# Day 5 - Algos
#Convert kg to pounds
def kg_to_pounds(kg):
    pounds = kg * 2.205

    return f'{pounds} pounds'


print(kg_to_pounds(7))