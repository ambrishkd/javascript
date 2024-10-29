// 1. this keyword:

// this keyword refers to "current context"

const user = {
    username: "sam",
    price: 999,
    welcomeMessage: function() { 
        console.log(`${this.username}, welcome to website`)
        console.log(this) // prints current context 
    }
}

user.welcomeMessage() // username in current context is sam
user.username = "ram" // username is changed now
user.welcomeMessage() // username in current context is ram now

// NOTE 1:

// global context in node environment is empty object.
// global context in browser is window object

// NOTE 2:

// a. we cannot use 'this' keyword as we have used in objects

function sample1() {
    let a = 1
    console.log(this.a) // it will give undefined
}
sample1()

// b. 'this' keyword in normal function have some property by default

function sample2() {
    console.log(this) // it is not empty object
}
sample2()

// c. but this keyword in arrow function is empty object

const sample3 = () => {
    console.log(this) // here it is empty object
}
sample3()

// 2. Arrow functions:

// type 1 - explicit return

const arrow1 = (num1, num2) => {
    return num1 + num2
}
console.log(arrow1(3, 4))

// type 2 - implicit return

const arrow2 = (num1, num2) => num1 + num2
console.log(arrow2(3, 5))

const arrow3 = (num1, num2) => (
    num1 + num2
)
console.log(arrow3(3, 6))

const arrow4 = () => (
    {firstname: "sam"}
)
console.log(arrow4())