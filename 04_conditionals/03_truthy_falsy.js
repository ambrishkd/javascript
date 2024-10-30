// 1. falsy values:

// false
// 0
// empty string
// negative zero(-0)
// 0n of BigInt
// null
// undefined
// NaN

// 2. truthy values:

// all other values except falsy are truthy, but some of the values might surprise and those values are:

// "0"
// "false"
// empty array
// " "
// empty object
// function(){} - empty function

// 3. Important NOTE:

// a. Checking whether given array is empty or not

const emptyArray = []
if(emptyArray.length === 0) {
    console.log("array is empty")
}

// b. Checking whether given object is empty or not

const emptyObject = {}
if(Object.keys(emptyObject).length === 0) {
    console.log("object is empty")
}

// 4. Nullish Coalescing Operator (??) : null undefined

// it is often used something like this - first value is null or undefined and second value is 
// some function which brings some data from some API or database which in case doesn't bring
// it will assign null or undefined to variable and further code can be handled accordingly

let val1
val1 = null ?? 10 // 10 will be assigned

// Sample use-case of NCO:

function returnNum() {
    return 3*5
}
let value = undefined ?? returnNum()
console.log(value)