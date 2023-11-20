//Day 8 - Array Practice 

let fruits = ['apple', 'banana', 'orange', 'strawberry']
console.log(fruits)
//Remove orange
fruits.splice(2,1)
console.log(fruits)
//Remove last item from array
fruits.pop()
console.log(fruits)
//Put pear at beginning of array
fruits.unshift('pear')
console.log(fruits)
//Remove all elements in array
fruits.splice(0)
console.log(fruits)

//change item in array to all uppercase
let colors = ['blue', 'red', 'green', 'yellow', 'black', 'white']
const upper = colors.map(item => {
    return item.toUpperCase();
})
console.log(upper)

//Use the every function determine if each item in the array is greater than zero
let numbers = [1, -2, 20, 60, 77]
const greaterZero = numbers.every(num => num > 0)
console.log(greaterZero)

