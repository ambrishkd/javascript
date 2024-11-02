/*
Prototype hierarchy:

String -> Object -> null
Array -> Object -> null
Function -> Object -> null
*/

let myArray = ["Hulk", "Spiderman"]
let myStr = "Captain America"
let myFunc = function() {
    console.log("This is myFunc")
}
let myObj = {
    Thor: "Hammer",
    Spiderman: "Web"
}

/*
NOTE:
- If we inject some properties in object, then that will be available in array, string and function.
- But vice versa is not true.
*/

// POINT 1: 
// This sample function is now available in myArray, myStr, myFunc.

Object.prototype.sample1 = function() {
    console.log("This is sample1 function")
}
// myArray.sample1() // does have access
// myStr.sample1() // does have access
// myFunc.sample1() // does have access

// POINT 2: 
// But if Array, String, Function has some property or method injected, then object doesn't have access, nor their neighbour.

Array.prototype.sample2 = function() {
    console.log("This is sample 2")
}
String.prototype.sample3 = function() {
    console.log("This is sample 3")
}
Function.prototype.sample4 = function() {
    console.log("This is sample 4")
}
myObj.sample2() // doesn't have access
myObj.sample3() // doesn't have access
myObj.sample4() // doesn't have access

// TOPIC: 
// Prototypal Inheritance

const User = {
    username: "sam",
    email: "sam@sample.com"
}

const Teacher = {
    recordLecture: true
}

const TeachingSupport = {
    planLecture: true
}

const TeachingAssistantSupport = {
    isAvailable: true,
    assignments: "JS Assignments",
    __proto__: TeachingSupport // Now, TeachingAssistantSupport has all the properties of TeachingSupport 
}

// Classical syntax of Prototypal Inheritance:
Teacher.__proto__ = User // Now, Teacher has all the properties of User

// Modern syntax of Prototypal Inheritance:
Object.setPrototypeOf(Teacher, User) // Now, Teacher has all the properties of User

// TOPIC: 
// Use case of this prototypal inheritance:

// Suppose we want to inject a custom property or method in all the String to get trueLength despite of 
// spaces in that string, so we will inject a trueLength property in all the String and can access it too.

String.prototype.trueLength = function() {
    return this.trim().length
}

const name = "sam   "
const tl = name.trueLength() // now name has a method called trueLength
console.log(tl)