// // Day 1 - Reverse a string with built in function 
// let str1 = 'Novak is a GREAT tennis player'

// //console.log(str1.split('').reverse().join(''))

// // Day 2 - Reverse string without built in function 
// revStr = ''

// for(i=str1.length -1; i>=0;i--){
//     revStr += str1[i]
// }

// //console.log(reStr)

// //Day 3 truncate string variable
// let color = 'red'
// let sport = 'tennis'
// let meal = 'breakfast'

// //first letter
// console.log(color[0])
// //fist 4 letters
// console.log((sport.slice(0,3)))
// //Last 4 letters
// console.log(meal.slice(-4))
// console.log(meal.substring(5))

// //Concatenate the string
// console.log(`${color}, ${sport}, and ${meal} `)

// //Find if second string contains any portion of the first string
// console.log(sport.includes(str1))
// console.log(str1.includes(sport))

// //Day 4 - Return the factorial of an integer
// //loop
// let x = 1;
// for(let i = 1; i<=5; i++){
//     x *= i
// }
// console.log(x)

//Day 5 - Conditionals
// let balance = 100.00
// let hairProducts = 29.78

// if (hairProducts <= balance){
//     balance -= hairProducts
//     console.log(`you purchased your item. Your balance is ${balance}`)
// }else {
//     console.log('You do not have enough money')
// }

//Convert kg to pounds
function kgToPounds(kg) {
    let pounds = kg * 2.205

    return `${pounds} pounds`
}
// console.log(kgToPounds(7)) //15.435

function areaCircle(r){
    let area = 3.14 * r**2

    return area
}

//console.log(areaCircle(2)) //12.566
//console.log(areaCircle(15)) //706.85

//Day 6 - Logical operators 
let wifeHungry = false
let husbandHungry = true

if (wifeHungry && husbandHungry){
    console.log('lets order pizza')
}else if (wifeHungry || husbandHungry){
    console.log('husband cooks')
}else{
    console.log('lets have some ice cream')
}