// 1. Singleton:

// Objects.create

// 2. Objects literals:

// 2a. declaring symbol for using it in object(as symbol, not string)
const mySym = Symbol("k1")

const jsUser = {
    name: "JS",
    "fullname": "JavaScript",
    [mySym]: "val1",
    age: 20,
    isLoggedIn: true,
    daysLoggedIn: ["Monday", "Thursday", "Sunday"]
}

// 3. accessing object:

console.log(jsUser.name) 
console.log(jsUser["age"])
console.log(jsUser["fullname"])
console.log(jsUser[mySym])

// IMPORTANT NOTE:-
// If we want to use Symbol inside a object as Symbol(not string), then we have to define it inside a square bracket.

// 4. Object freeze:

Object.freeze(jsUser) // It locks/freeze the object, so that new changes cannot modifies this object
jsUser.name = "Web" // this change will not propagate to the object, without error
console.log(jsUser)

// 5. Functions inside object:

jsUser.greeting1 = function() {
    console.log("Hello JS user")
}

jsUser.greeting2 = function() {
    console.log(`Hello JS User ${this.name}`)
}

console.log(jsUser.greeting1) // NOTE: It returns function reference, not execute the function and returns output
console.log(jsUser.greeting2()) 
