// Object literal:

const user = {
    username: "Sam",
    loginCount: 8,
    signedIn: true,

    getUsername: function() {
        return this.username
    }
}

console.log(user)
console.log(user.getUsername())

/*
NOTE:
- Global context in node.js environment is {}
- Global context inside browser is Window object
*/

// Constructor function:

const promiseOne = new Promise()
const date = new Date()

/*
NOTE: 
- new keyword here is constructor function which is used to make new instances from one object literal.
- As some cases we need new instance only. e.g. Promise, Date etc.
*/