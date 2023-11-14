// Day 1 - Reverse a string with built in function 
let str1 = 'Novak is a GREAT tennis player'

console.log(str1.split('').reverse().join(''))

// Day 2 - Reverse string without built in function 
rev_str = ''

for(i=str1.length -1; i>=0;i--){
    rev_str += str1[i]
}

console.log(rev_str)