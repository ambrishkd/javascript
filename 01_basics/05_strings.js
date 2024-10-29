// console.log(`Using backticks to write strings is known as string interpolation`)

// another way of declaring a string
const str1 = new String("hello")
console.log(str1)
console.log(str1[0])

console.log(str1.__proto__) // {}
console.log(str1.toUpperCase()) // original value doesn't change
console.log(str1.charAt(1)) // e
console.log(str1.indexOf('e')) // 1

console.log(str1.substring(0, 3)) // hel & cannot give negative values
console.log(str1.slice(-3, 5)) // llo
console.log(str1.slice(0, 2)) // he

const str2 = "   somevalue   "
console.log(str2)
console.log(str2.trim())

const url = "https://javascript.com/javascript%20notes"
console.log(url.replace("%20", "-"))

// NOTE: Look over all the functions of string using browser in-built console.