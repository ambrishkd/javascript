// 1. Normal function:

function sayHello() {
    console.log("Hello!")
}

sayHello // function reference
sayHello() // function execution

// 2. passing default values:

function loginUserMessage(username = "user") {
    return `${username} just logged in`
}

console.log(loginUserMessage()) // default value will be used
console.log(loginUserMessage("javascript")) // default value will be override

// 3. Rest operator

function calculatePrice(price1, ...price) {
    return price
}

console.log(calculatePrice(200, 500, 700)) // rest operator will bundle the rest(remaining) values in an array

// 4. Passing object in a function

const user = {
    username: "javascript",
    age: 21
}

function handleObject(incomingObject) {
    console.log(`user is ${incomingObject.username} whose age is ${incomingObject.age}`)
}

handleObject(user)

// 5. Passing array in a function

const prices = [200, 400, 600, 800]

function getSecondPrice(someArray) {
    return someArray[1]
}

console.log(getSecondPrice(prices))