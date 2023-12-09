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

    return arr[arr.length -1]
}

let testArr = ['hello', 'code', 'practice', 'fun']

console.log(longestStr(testArr))
console.log(longestSort(testArr))