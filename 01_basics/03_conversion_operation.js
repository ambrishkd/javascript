/***** CONVERSIONS *****/

// TO NUMBER
// =========

// conversion of number string to Number:-

let a = "33"
console.log(typeof a) // string
let aInNumber = Number(a)
console.log(typeof aInNumber) // Number
console.log(aInNumber) // 33

// conversion of non-number string to Number:-

let score = "javascript"

console.log(typeof score) // string
let scoreInNumber = Number(score)
console.log(typeof scoreInNumber) // Number
console.log(scoreInNumber) // NaN(Not a Number)

// conversion of boolean to Number:-

let condition = true
console.log(typeof condition) // boolean
let conditionInNumber = Number(condition)
console.log(typeof conditionInNumber) // Number
console.log(conditionInNumber) // 1

// conversion of null to Number:-

let var1 = null
let var1InNumber = Number(var1)
console.log(typeof var1InNumber) // Number
console.log(var1InNumber) // 0

// conversion of undefined to Number:-

let var2 = undefined
let var2InNumber = Number(var2)
console.log(typeof var2InNumber) // Number
console.log(var2InNumber) // NaN

// TO BOOLEAN
// ==========

// conversion to Boolean:-

/*
Empty string or 0 => false
string or non-zero number => true
*/


/***** OPERATIONS *****/

// +, -, *, **, /, %

// tricky string operations:-

console.log(1 + "2") // 12
console.log("1" + 2) // 12
console.log(1 + 2 + "2") // 32
console.log("1" + 2 + 2) // 122
console.log(+"") // 0

// tricky boolean operations:-

console.log(true) // true
console.log(+true) // 1
// console.log(true+) // not a right syntax
