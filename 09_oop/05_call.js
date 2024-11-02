function setUserName(username) {
    this.username = username
}

function createUser(username, email, password) {
    // This method will set the username in setUserName's current context,
    // which will be dead after the function ends setUserName.
    // That's why we have to use call method and pass createUser's this to set the value.
    // setUserName(username) // this will not work
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const user1 = new createUser("sam", "sam@email.com", 12345678)
console.log(user1)