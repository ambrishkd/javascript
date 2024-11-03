/*
Que: Can we change PI value in JS, if yes then how and if no then why not?
Ans: No, we cannot change/overwrite PI value in JS as some of the descriptor properties (which is hidden) is 
    set to false in Math library for PI such as writable property is set to false and cannot be overwritten.
*/

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// NOTE 1: This is not possible.

Math.PI = 4
console.log(Math.PI)

// NOTE 2: We can also access such hidden properties of our custom object's properties.

const coffee = {
    name: "espresso",
    price: 130,
    isAvailable: true
}
const myDescriptor = Object.getOwnPropertyDescriptor(coffee, "name")
console.log(myDescriptor);

// NOTE: We can change these hidden properties also.

Object.defineProperty(coffee, "name", {
    writable: false,
})
coffee.name = "cappuccino" // we cannot overwrite the value of name

// MORE EXAMPLES:

const chai = {
    name: "masala chai",
    price: 15,
    isAvailable: true,

    noChai() {
        console.log("Chai nahi ban paayi");
    }
}

// 1. Changing the enumerable value of false, that will make looping through it disabled.

for(const [key, value] of Object.entries(chai)) {
    console.log(`Before changing: ${key}- ${value}`);
}
Object.defineProperty(chai, "name", {
    enumerable: false
})
for(const [key, value] of Object.entries(chai)) {
    console.log(`After changing: ${key}- ${value}`);
}

// 2. Looping only properties, not methods of a object

console.log(`Before conditional statement:`);
for(const [key, value] of Object.entries(chai)) {
    console.log(`${key}- ${value}`);    
}

console.log(`\nAfter conditional statement:`);
for(const [key, value] of Object.entries(chai)) {
    if(typeof value !== "function") {
        console.log(`${key}- ${value}`);
    }
}