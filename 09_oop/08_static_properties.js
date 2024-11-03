class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
    static createId() {
        return `123`
    }
}

const user1 = new User("sam")
// console.log(user1.createId()) // Now, instances of User doesn't have access to static methods

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    } 
}

const teacher1 = new Teacher("ram", "ram@email.com")
console.log(teacher1)
// console.log(teacher1.createId()) // Even inherited class's instance doesn't have access to static method