class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    capitaliseUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("sam", "sam@email.com", 12345)
console.log(user1.encryptPassword())
console.log(user1.capitaliseUsername())
console.log(user1)

// Behind the scene:

// function User(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`
// }

// User.prototype.capitaliseUsername = function() {
//     return `${this.username.toUpperCase()}`
// }

// const user1 = new User("sam", "sam@email.com", 12345)
// console.log(user1.encryptPassword())
// console.log(user1.capitaliseUsername())
// console.log(user1)