// >, >=, <, ==, !=

console.log("2" > 1) // true
console.log("02" > 1) // true

// null:-

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

/* 
NOTE:- 
Equality check(==) and comparisons(>, <, >=, <=, !=) works differently.
Comparisions convert null to a number, treating it as 0.
That's why (null >= 0) gives true and (null == 0) gives false.
*/

// undefined:-

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// strict check:-

console.log("2" == 2) // true
console.log("2" === 2) // false(strict check)