"use strict"; // treat all JS code as newer version

// alert(3+3) // using nodejs, not browser

// NOTE: Code readability should be high

/*
Standard documentations: https://tc39.es/ecma262/
Normal documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

// Need not to explicitly mention datatype, JS will automatically assign it:

let name = "Ambrish"
let age = 20
let canVote = true

// Datatypes
// =========

// PRIMITIVE: by value

// number => range is 2 to the power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined

// BigInt
const bigNumber = 34675687654357687654n

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) // false, as even if value is same symbols are unique

// NON-PRIMITIVE: by reference

// Array
const myArray = ["Ironman", "Spiderman", "Hulk", "Thor", "Loki"]

// Object
const myObject = {
    name: "Tony Stark",
    superName: "Ironman"
}

// Functions
const myFunction = function() {
    console.log("Marvel Cinematic Universe")
}

// NOTE: JS is a dynamically typed language.

// typeof datatypes:-

console.log(typeof "") // string
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof myFunction) // function object
console.log(typeof myObject) // object
console.log(typeof myArray) // object
