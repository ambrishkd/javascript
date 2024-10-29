const num1 = 400 // automatically detected & decided that it's a Number

const num2 = new Number(300) // strictly decided the datatype

// toString() and toFixed():-
console.log(num2.toString()) // "300"
console.log(num2.toFixed(2)) // 300.00

// toPrecision():-
const num3 = 23.687
console.log(num3.toPrecision(2)) // 24
console.log(num3.toPrecision(3)) // 23.7

const hundreds = 100000
console.log(hundreds.toLocaleString("en-IN")) // 1,00,000(en-IN will convert it to Indian style, else default is en-US)

/*********** Math ***********/

console.log(Math) // Math is a object in itself

console.log(Math.abs(-4)) // 4
console.log(Math.round(43.5)) // 44
console.log(Math.ceil(43.5)) // 44
console.log(Math.floor(43.5)) // 43
console.log(Math.random()) // any random value between 0 to 1

// TRICK:- 
// To get random number between any number to any number defined by you

const mini = 100
const maxi = 200
console.log(Math.floor(Math.random()*(maxi-mini+1)) + mini)