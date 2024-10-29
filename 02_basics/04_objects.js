// NOTE: There are no internal diff b/w them, but only diff is:- one is singleton & another is non-singleton.

const user1 = new Object() // singleton object
console.log(user1)

const user2 = {} // non-singleton object

// 1. Nesting: 

const regularUser = {
    id: 2,
    email: "some@email.com",
    name: {
        firstname: "sam",
        lastname: "altman"
    }
}
console.log(regularUser.name.firstname) // normal syntax to access this
console.log(regularUser.name?.firstname) // ? mostly used in API requests, as if name doesn't exists

// 2. Combining Objects:

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({}, obj1, obj2, obj3) // method 1 of combining or joining
console.log(obj4)

const obj5 = {...obj1, ...obj2, ...obj3} // method 2 of combining or joining
console.log(obj5)

// 3. Accessing array of objects:

const objArr = [
    {
        1: "a"
    },
    {
        2: "b"
    },
    {
        3: "c"
    }
]
console.log(objArr[1])

// 4. Important object methods:

console.log(Object.keys(regularUser)) // returns a array of keys of regularUser object
console.log(Object.values(regularUser)) // returns a array of values of regularUser object
console.log(Object.entries(regularUser)) // converts key-values pairs into individual arrays
console.log(regularUser.hasOwnProperty("name")) // return true/false whether the property is available in object or not

// 5. Object de-structuring:

const course = {
    coursename: "js",
    courseprice: "999",
    courseinstructor: "sam"
}

const {courseinstructor} = course // calling that property with its name itself
console.log(courseinstructor)

const {courseinstructor: instructor} = course // giving a new name to that property of object
console.log(instructor)
