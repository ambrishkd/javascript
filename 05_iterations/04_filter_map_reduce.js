const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. forEach doesn't return anything

const val1 = nums.forEach((num) => {
    return num;
});
console.log(val1) // it will be undefined

// 2. filter(): returns values according to filter(condition) provided

const val2 = nums.filter((num) => {
    return num > 4;
});
console.log(val2) // it will be an array of numbers > 4

// this can be done using forEach too but that's a little bit lengthy:

const val3 = []
nums.forEach((num) => {
    if(num > 4) {
        val3.push(num)
    }
})
console.log(val3)

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const allHistoryBooks = books.filter((hb) => hb.genre === "History" )
console.log(allHistoryBooks)

const historyBooksFrom1990 = books.filter((hb) => {
    return hb.genre === "History" && hb.publish >= "1990"
})
console.log(historyBooksFrom1990)

// 3. map(): creates a new array with new modified values

const newNums = nums.map((num) => num+10) // adds 10 to each num and return the modifies array
console.log(newNums)

// 4. chaning of different methods:

// example 1: chaining of same functions

const newNums2 = nums
    .map((num) => num*10) // it will work on nums array
    .map((num) => num*10) // it will work on output of first method applied in chaining
console.log(newNums2)

// example 2: chaining of different functions

const newNums3 = nums
    .map((num) => num*10) // it will work on nums array
    .map((num) => num*10) // it will work on output of first method applied in chaining
    .filter((num) => num > 500) // it will filter out the numbers less than 500(which will be applied on output of 2nd method in chaining)
console.log(newNums3)

// 5. reduce(): output of running reduce on an array is a single value

// syntax:

const initialValue = 0;
const sampleVariable = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

// using simple function as callback function in reduce():

const summation1 = nums.reduce(function(acc, curr) {
    return acc + curr
}, 0)
console.log(summation1)

// using arrow function as callback function in reduce():

const summation2 = nums.reduce((acc, curr) => acc + curr, 0)
console.log(summation2)