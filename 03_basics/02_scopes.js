// 1. local & global scope:

var v1 = 100 // having global scope

// having local scope
let v2 = 10
const v3 = 40

if(true) {
    let v4 = 80
    console.log(v4)
}

// console.log(v4) // cannot be accessed

// 2. function vs expression(hoisting):

// function: 

addOne(4) // can access before function declaration
function addOne(val) {
    return val + 1
}
addOne(4) // can access normally

// expression: 

addTwo(5) // cannot access before function expression as we're holding the return value in a variable
const addTwo = function(val) {
    return val + 2
}
addTwo(5) // can access normally