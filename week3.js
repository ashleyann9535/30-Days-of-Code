//Day 15 
//Create a function that takes a string as a parameter.
//If the string contains certain symbols, remove the symbols, replace each one  with a space, 
//and then return a new string; Symbols to remove: { } [ ] ! < > ( )
const noSymbols = word => {
    let symbolRegex = /[{}[\]!<>()]/g;
    let newWord = word.replace(symbolRegex, ' ');

    return newWord;
}

console.log(noSymbols('(h<e}l]l!o')); //h e l l o