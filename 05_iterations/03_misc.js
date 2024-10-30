// NOTE: these loops are more of array specific

// 1. for of:

// for of on array, string

const greetings = "Hello, World!"
for(const greet of greetings) {
    console.log(greet) // prints each character of greetings in new line
}

const myArr = [1, 2, 4, 5, 6]
for(const num of myArr) {
    console.log(num) // prints every value of array in new line
}

// for of on map(an object, no duplicate values, remembers order of insertion, key-value pair)

const mp = new Map()
mp.set('IN', "India")
mp.set('USA', "United States of America")
mp.set('Fr', "France")

for(const [key, val] of mp) {
    console.log(`${key}: ${val}`)
}

// NOTE: for of loop doesn't work with object

// 2. for in:

// for in on object

const lang = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python"
}

for(const key in lang) {
    console.log(`file extension of ${lang[key]} is ${key}`)
}

// for in on array

const shortcuts = ['cpp', 'rb', 'js', 'py']

for(const key in shortcuts) {
    console.log(`value on index ${key} in array shorcuts is ${shortcuts[key]}`)
}

// NOTE: for in loop doesn't work with map  

// 3. for each:

const coding = ["cpp", "python", "java", "ruby"]

// syntax: coding.forEach(a callback function)

// method 1: define it there only

coding.forEach((item) => {
    console.log(item)
})

coding.forEach((item, index, array) => {
    console.log(item, index, array) // it has index and whole array access too
})

// method 2: pass a reference

const printMe = (item) => {
    console.log(item)
}
coding.forEach(printMe)

// NOTE: accessing object inside an array

const myCoding = [
    {
        language: "javascript",
        shortcut: "js"
    },
    {
        language: "python",
        shortcut: "py"
    },
    {
        language: "ruby",
        shortcut: "rb"
    }
]

myCoding.forEach((item) => {
    console.log(`shortcut for ${item.language} is ${item.shortcut}`)
})