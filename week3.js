//Day 15 
//Create a function that takes a string as a parameter.
//If the string contains certain symbols, remove the symbols, replace each one  with a space, 
//and then return a new string; Symbols to remove: { } [ ] ! < > ( )
const noSymbols = word => {
    let symbolRegex = /[{}[\]!<>()]/g;
    let newWord = word.replace(symbolRegex, ' ');

    return newWord;
}

//console.log(noSymbols('(h<e}l]l!o')); //h e l l o

//Day 16
//Write a function that accepts an array of strings. Return the longest string
const longestStr = arr => {
    let longest = '';

    arr.forEach(element => {
        if(element.length > longest.length){
            longest = element;
        };
    });

    return longest;

}

const longestSort = arr => {
    arr.sort((a,b) => {
        return a.length - b.length;
    });

    return arr[arr.length -1];
}

let testArr = ['hello', 'code', 'practice', 'fun'];

// console.log(longestStr(testArr))
// console.log(longestSort(testArr))

//Day 17
//Create a function that takes any number. Add 1 to each of the digits of the  number 
//and return that value
const addToDigit = (num) => {
    let arr = [];
    while(num != 0){
        arr.push((num % 10) + 1);

        num = Math.floor(num / 10);
    }

    return arr.reverse().join('');
}

//console.log(addToDigit(876)); //987
//console.log(addToDigit(998)); //10109

//Day 18 
//Return the sum of all odd Fibonacci numbers that are less than or equal to num

const oddFibonacci = num => {
    let fibonacciArr = [0, 1];
    
    for (let i = 2; i < num; i++) {
        fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
    };

    let oddSum = fibonacciArr
      .filter(n => n % 2 !== 0)
      .filter(n => n < num)
      .reduce((acc, cur) => acc + cur);

    return oddSum;
}

console.log(oddFibonacci(10)); //10
console.log(oddFibonacci(14)); //23