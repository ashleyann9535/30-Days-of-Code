//Day 8 - Array Practice 

let fruits = ['apple', 'banana', 'orange', 'strawberry'];
//console.log(fruits);
//Remove orange
fruits.splice(2,1);
//console.log(fruits);
//Remove last item from array
fruits.pop();
//console.log(fruits);
//Put pear at beginning of array
fruits.unshift('pear');
//console.log(fruits);
//Remove all elements in array
fruits.splice(0);
//console.log(fruits);

//change item in array to all uppercase
let colors = ['blue', 'red', 'green', 'yellow', 'black', 'white'];
const upper = colors.map(item => {
    return item.toUpperCase();
});
//console.log(upper);

//Use the every function determine if each item in the array is greater than zero
let numbers = [1, -2, 20, 60, 77];
const greaterZero = numbers.every(num => num > 0);
//console.log(greaterZero);

//Day 9 - Array Methods
let odds = [5,8,14,13,29,98]; 
let evens = [11,6,2,87,43,22,104];

//Use the filter function on the evens array to only store even numbers
let evenNumbers = evens.filter(num => {
    return num % 2 === 0
});
//console.log(evenNumbers);

//Use the filter function on the odds array to only store odd number
let oddNumbers = odds.filter(num => num % 2 != 0);
//console.log(oddNumbers);

//Add the numbers of both arrays and store the result in a variable and then print it
let totalNumbers = odds
    .concat(evens)
    .reduce((acc, cur) => acc + cur, 0)
//console.log(totalNumbers)

let states = ['alaska', 'arkansas', 'missouri', 'texas', 'nevada', 'california'];
//filter to only select states that start with 'a'
//map and reduce each state to 3 characters  (ie “nevada” would turn into “nev”)
//reduce to add up the count of characters from the  remaining words
let filterStates = states
    .filter(state => state[0] === 'a')
    .map(state => state.substring(0,3))
    .reduce((acc, cur) => acc + cur);
//console.log(filterStates.length)

//Day 10 - Loops
let words = ['ant', 'awkward', 'car', 'zebra'];
//Reverse array with loop
let reverseLoop = [];
for(let i = words.length -1; i >= 0; i--){
    reverseLoop.push(words[i]);
}
//console.log(reverseLoop);
//Reverse this array using the built-in reverse function
let reverseMethod = words.reverse();
//console.log(reverseMethod);

//Create a variable named evenTotal
//Write code that loops through the nums array, adds only the even numbers, 
// and stores the final result in the evenTotal variable
let nums = [2,3,4,5,6,7,8,9,10,11,12];

let evensTotal = nums
    .filter(item => item % 2 === 0)
    .reduce((acc, cur) => acc + cur);
//console.log(evensTotal)


//Day 11 - Functions and conditional statements
//Write a function that prints the even numbers 2-100 with only 50 iterations
const evenLoop = (num) => {
    for(let i =2; i <=num; i+=2){
        console.log(i);
    }
    return num;
}
//evenLoop(100);

//Write a function that returns the total count of integers 
//that are not multiples  of either 6 or 15  between a range of 1 and 200
const multiples = (range, mult1, mult2) => {
    let count = 0
    for(let i = 1; i < range; i++){
        if(i % mult1 === 0 || i % mult2 === 0){
            count++;
        };
    }
    return count;
}
//console.log(multiples(200, 6, 15)); //40

//Write a JavaScript program to check two given numbers and return true 
//IF one of the number is 40 OR if their sum is 40. - else return false
const forty = (x, y) => {
    if(x === 40 || y === 40 || x + y === 40){
        return true;
    }else{
        return false;
    }
}
//console.log(forty(10, 35)) //false
//console.log(forty(10, 30)) //true
//console.log(forty(40, 35)) //true

//Day 12 Objects 
//Remove Ford key from object if exists
const vehicles = {
    'Honda': 'CRV',
    'Jeep': 'Wrangler',
    'Chrysler': 'Pacifica',
    'Ford': 'F150'
};
//console.log(vehicles);

if('Ford' in vehicles){
    delete vehicles.Ford;
};

//console.log(vehicles)

//Put all object keys in array
const students = {
    Jon: {
        age: 27,
        online: false
    },
    Jack: {
        age: 32,
        online: true  
    },
    Jenn: {
        age: 48,
        online: false
    },   
    Liz: {
        age: 19,
        online: true
    } 
}; 

const objKeys = (obj, results = []) => {
    let prev = results;
    Object.keys(obj)
        .reduce((acc, key) => acc.concat(key, obj[key]), [])
        .map(item => (typeof item === 'string' ? prev.push(item) : objKeys(item, prev)));
    
        return prev;
};

//console.log(objKeys(students))

//Day 13 
//Create a function that takes an array of two numbers as a parameter
//Return the sum of those two numbers, plus all of the numbers in-between.
const sumRange = (arr) => {
    let sum = 0
    for(let i = arr[0]; i <= arr[1]; i++){
        sum += i
    }
    return sum
}

console.log(sumRange([1,4])) //10