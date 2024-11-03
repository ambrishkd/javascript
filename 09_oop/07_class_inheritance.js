class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password, canTeach) {
        super(username) // it will take that 'this' with it for storing username in this current context
        this.email = email
        this.password = password
        this.canTeach = canTeach
    }

    addCourse() {
        console.log(`New course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("sam", "sam@email.com", 12345, true)
console.log(teacher1)