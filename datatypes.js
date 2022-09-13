// Primitive Data Types
let a = null
let b = 654
let c = Symbol('this is a symbol')
let d = 'Sanju'
let e = undefined
let f = BigInt(654)
let g = true // can be false as well
console.log(a, b, c, d, e, f, g)
console.log(typeof a) // to know the type of the data use typeof function
// Objects in JavaScript
let obj = new Object() // generic object creation

// objects can be declared using literal notations as well

let square = {}
let circle = { a: 5, b: 6, c: 8 }
console.log(circle)
// This is an example for object creation
let person = {
  firstName: 'Sanjith ',
  lastName: 'Kumar',
}
console.log(person.firstName + person.lastName) // variable.key

const item = {
  Sanju: true,
  Punith: 345,
  Sagar: false,
  John: undefined,
}
console.log(item['Punith'])

// Array - with the help of array we can store more than one element

let newArray = new Array()
let secondArray = new Array()
let finalArray = new Array(4, 'Sanju', null, undefined, true)
console.log(finalArray)
// NaN - not a number
console.log(0 / 0) // --> 0/0 gives us a NaN
console.log(1 + NaN) // --> this results in a NaN
console.log(1 / 0) // --> this results in infinity
console.log(-1 / 0) // --> this results in negative infinity
console.log(09 / -0) // --> this results in negative infinity as well
// negative 0 is a whole value in JavaScript as well
console.log(200 + 0 / 0) // --> this is still NaN

// boolean values
let isPlaying = true // -> can be changed depending on the scenario
console.log(isPlaying)
const isSunHot = true // -> cannot be changed, since its true universally
let convo = 'He said "Ewwww"' // --> this is valid
let anotherConvo = "He said 'Ewwww'" // --> this is valid
// let yetAnotherConvo = "He said "Ewww"" // --> this is not valid

let firstName = 'Sanjith'
let lastName = 'Kumar'
console.log(firstName + ' ' + lastName)
// Null
let currentUser = null
currentUser = 'Sanjith Kumar V'
console.log(currentUser)

// Math Object --> contains a set of methods
console.log(Math.PI)
console.log(Math.floor(2.4657657)) // --> it chops off the decimal points
console.log(Math.random()) // --> generates a random number
console.log(Math.sqrt(16))
console.log(Math.round(3.51)) // --> rounds of the number.
console.log(Math.pow(5, 2)) // --> square of the number
// just a program demonstrating few Math Operations
const firstStep = Math.random()
const secondStep = firstStep * 10
const thirdStep = Math.floor(secondStep)
const fourthStep = thirdStep + 1
console.log(fourthStep)

let nameOf = 'Freddy'
console.log(typeof nameOf)
let age = 21
age = parseInt(age) + 1
console.log(age)
