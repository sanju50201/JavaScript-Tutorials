var a = 2
let b = 'Sanju'
var c = null
var d = undefined
{
  let b = 'this'
  console.log(b)
}
console.log(b)
// Using var keyword
var x = 5
var y = 6
var z = x + y

// Using let keyword
let e = 5
let f = 6
let g = x + y

// undecalred variables
h = 8
i = 8
j = h + i

// using const
const price1 = 85
const price2 = 55
let total = price1 + price2 // this value can be changed
total += 60 // the variable is getting added by 60, since let is used, the o/p will be different
console.log(total)

let name = 'Sanju' // storing a string with single qoutes
let place = 'Bengaluru' // stroing a string with double qoutes

let carName = 'Volvo'
carName
console.log(carName)

// Arithmetic operations
let sum = 1 + 2 + 3
console.log(sum)
// String concatenation
let concat = 'Hello, ' + 'Sanjith'
console.log(concat)
// Adding a string and an int, if a number is stored as string the rest of the numbers behaves like a string
let newData = 3 + '2' + 1
let secondData = 6 + 5 + '1' // in this case, the first two ints will be added and the string wil be concatenated
console.log(newData)
console.log(secondData)
let document = 12 + 12
console.log(document)
// Reserved keywords in JavaScript
// let, var, const, var is not used in modern day JavaScript
/**
 * once const is defined with a value, it cannot be updated, whereas let allows
 * you to update the value of a variable unlike const
 */
const greet = 'Hello'
greet = 'Greetings'
console.log(greet)
// const can be used when you are in no need to change or update the value of a variables
// below are the examples for const, where you cannot change value, once declared
const pi = 3.14
const daysInAWeek = 7
const numberOfContinents = 7
