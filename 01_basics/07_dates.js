// Beginning is: 01 Jan 1970
// Temporal: Will be used in future

let myDate = new Date() // Date is a object in itself
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString()) // convert to date only
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString()) // convert to locale date only
console.log(myDate.toLocaleString()) // convert to locale date and time
console.log(myDate.toTimeString()) // convert to time only with time zone
console.log(myDate.getHours()) // returns hours of time only

let myCreatedDate = new Date(2024, 0, 11, 14, 59) // YYYY, M, D, H, M
console.log(myCreatedDate.toLocaleString()) // 1/11/2024, 2:59:00 PM

console.log(myCreatedDate.getTime()) // returns time of the date from 1970 im milliseconds
let myTimestamp = Date.now() // return time from 1970 in milliseconds
console.log(myTimestamp) 

let myCreatedDate2 = myCreatedDate.toLocaleString("String", {
        weekday: "long",
        month: "2-digit"
})
console.log(myCreatedDate2)

console.log(Math.floor(Date.now()/1000)) // time in seconds