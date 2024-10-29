// array:

const arr1 = [1, 2, 4, 5, 6]

const arr2 = [2, 3, "Shaktiman", "Hulk", true]

const arr3 = new Array(1, 2, 4, true)

console.log(arr1, arr2, arr3)

/*
NOTE:- 
JS array copy operation create shallow copies.
Shallow copy - Share the same references
Deep copy - Do not share the same references
*/

// array methods:

arr1.push(7) // adds in the last
arr1.pop() // removes from last

arr1.unshift(3) // add in the start
arr1.shift() // removes from start

console.log(arr1.includes(3)) // false 
console.log(arr1.indexOf(4)) // 2

// Interesting operation:

const newArr = arr1.join()
console.log(newArr) // type is string(separated by separator)
console.log(arr1) // type is array

// Important: slice and splice

console.log(arr1) // original arr1

const sliceArr = arr1.slice(1, 3) // slice - makes a copy from 1st index to 3rd index excluding
console.log(sliceArr)
console.log(arr1)

const spliceArr = arr1.splice(1, 3) // splice - removes the part from 1st index to 3rd index including
console.log(spliceArr)
console.log(arr1)