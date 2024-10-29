const marvel_heroes = ["Hulk", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// push:

marvel_heroes.push(dc_heroes) // pushes dc_heroes as array at 3rd index inside marvel heroes(manipulating original array)
console.log(marvel_heroes)

// concat:

const all_heroes = marvel_heroes.concat(dc_heroes) // concatenates all individual elements of dc_heroes in marvel_heroes & returns a new array
console.log(all_heroes)

// Better method: using spread operator

const all_heroes_2 = [...marvel_heroes, ...dc_heroes] // NOTE: works on more than 2 arrays at once
console.log(all_heroes_2)

// Flattening arrays inside an array:

const sample_array = [2, 3, 4, [5, 2, 4, [4, 5, 2, [5, 8, 9]]]]
const usable_sample_array = sample_array.flat(Infinity) // Infinity is level if depth in which it has to flat that array
console.log(usable_sample_array)

// Check for array & Convert to Array:

console.log(Array.isArray("JavaScript")) // false
console.log(Array.from("JavaScript")) // makes an array from given parameter

// Interesting point:

// If it can't make array from given paramter(as if it doesn't detected the type and in objects, there is 
// not a defined way to make array like, make array from keys, values), then it returns [](empty array)
console.log(Array.from({name: "JavaScript"})) // []

// Make array from set of variables:

const score1 = 100
const score2 = 98
const score3 = 94
console.log(Array.of(score1, score2, score3)) // returns an array including score1, score2, score3 as its elemets