
/* NOTE: 
- Same name like password for password cannot be used inside getter and setter.
- But same name like password for password is used for getter and setter function names.
*/

class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
    get password() {
        return `${this._password.toUpperCase()}`
    }
    set password(value) {
        this._password = value
    }
}

const user1 = new User("sam", "pass@123")
console.log(user1.password)

/*
NOTE:
- As above method to define getter-setter is quite new in JS.
- So, before this getter-setter is defined using properties in function or object.
*/

// function based:

function User(username, password) {
    this._username = username
    this._password = password

    Object.defineProperty(this, "password", {
        get: function() { return `${this._password.toUpperCase()}` },
        set: function(value) { this._password = value }
    })
}

const user2 = new User("sam", "sam@123")
console.log(user2.password)

// object based:

const User = {
    _username: "sam",
    _password: "sam@123",

    get password() {
        return this._password.toUpperCase()
    },
    set password(value) {
        this._password = value
    }
}

const user3 = Object.create(User)
console.log(user3.password)