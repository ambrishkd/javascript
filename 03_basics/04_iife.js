// immediately invoked function expressions

// 1. Why we use iife: to avoid global scope pollution, we use iife

// 2. iife:

// (wrap the function inside it)(this is for execution which is generally used for typical execution)

// named iife:
(function connectDB() {
    console.log(`DB Connected`)
})();

// NOTE 1:
// we must use semi-colon to end the scope of iife

// 3. arrow function iife:

(() => {
    console.log(`DB Connected again`)
})();

// 4. passing parameter in iife:

((name) => {
    console.log(`${name}'s DB Connected`)
})("sam");

// NOTE 2:
// iife with name called 'named iife' else called 'simple iife'