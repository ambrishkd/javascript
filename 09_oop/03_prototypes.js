// Prototypes:

// Js default behavior is prototypal.
// Js don't give up until it founds the null value.

// NOTE: Everything in Js is Object, even function is a object.

function multiplyBy5(num) {
    return num*5
}
multiplyBy5.power = 2 // showing object like behaviour
console.log(multiplyBy5.power) // can access power by using dot notation

// NOTE: Everything's prototype is object and object's prototype is null.

// Importance of new keyword:

function createProduct(name, price) {
    this.name = name
    this.price = price
}
createProduct.prototype.getPrice = function() {
    return this.price
}
createProduct.prototype.getProductName = function() {
    return this.name
}

const product1 = new createProduct("chai", 10)
const product2 = new createProduct("coffee", 15)
console.log(typeof product1) // type is object

const nameOfProduct = product1.getProductName()
console.log(nameOfProduct)

/*
Here's what happens behind the scenes when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.
- A prototype is linked: The newly created object gets linked to the prototype property of the constructor 
    function. This means that it has access to properties and methods defined on the constructor's prototype.
- The constructor is called: The constructor function is called with the specified arguments and 
    this is bound to the newly created object. If no explicit return value is specified from the 
    constructor, JavaScript assumes this, the newly created object, to be the intended return value.
- The new object is returned: After the constructor function has been called, if it doesn't return 
    a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/