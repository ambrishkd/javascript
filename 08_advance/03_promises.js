// Example 1: using variable to hold promise

const promiseOne = new Promise((resolve, reject) => {
    // Can do async tasks such as DB calls, network related, cryptography etc.
    setTimeout(() => {
        console.log('Async task is completed')
        resolve()
    }, 2000)
})

promiseOne.then(() => {
    console.log('Promise resolved')
})

// Example 2: not using variable to hold promise

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2 is completed')
        resolve()
    }, 2000)
}).then(() => {
    console.log('Promise 2 resolved')
})

// Example 3: returning value, when resolved

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 3 is completed')
        resolve({username: 'sam', email: 'sam@chatgpt.com'})
    }, 2000)
})

promiseThree.then((user) => {
    console.log('Promise 3 resolved')
    console.log(user)
})

// Example 4: using reject too

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            console.log('Async task 4 is completed')
            resolve({username: 'sam', email: 'sam@chatgpt.com'})
        } else {
            console.log('Async task 4 is not completed')
            reject('404 User not found!')
        }
    }, 2000)
})

promiseFour
.then((user) => {
    console.log('Promise resolved')
    return user.username
})
.then((username) => {
    console.log(`User's name is: ${username}`)
})
.catch((err) => {
    console.log('Promise not resolved')
    console.log(`ERROR: ${err}`)
})
.finally(() => {
    console.log('Promise is either resolved or rejected.')
})

// Example 5: using async await to handle promise

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            console.log('Async task 5 is completed')
            resolve({username: 'sam', email: 'sam@chatgpt.com'})
        } else {
            console.log('Async task 5 is not completed')
            reject('404 User not found!')
        }
    }, 2000)
})

async function handlePromiseFive() {
    try {
        const response = await promiseFive
        console.log('Using async-await, Promise resolved')
        console.log(response)
    } catch(err) {
        console.log('Using async-await, Promise not resolved')
        console.log(`ERROR: ${err}`)
    }
}

handlePromiseFive()

// TOPIC: using fetch() with async/await

async function getUserDetails() {
    try {
        const response = await fetch('https://api.github.com/users/ambrishkd')
        const data = await response.json()
        console.log(`Name using async/await: ${data.name}`)
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
}

getUserDetails()

// TOPIC: using fetch() with then/catch

fetch('https://api.github.com/users/ambrishkd')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(`Name using then/catch: ${data.name}`)
})
.catch((error) => {
    console.log(`ERROR: ${error}`)
})
