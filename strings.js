/**
 * Strings are indexed i.e., it starts from o and goes upto (n-1)
 * for eg, a string SANJITH has a first index of 0 to S and last index of 6 to H
 * the string is a 7 character string, the index will be (n-1)
 * everything inside the commas is treated as a string, whether it might be
 * a string, character, a number, special characters, etc
 * */
// string has a property called length which gives us the length of the string
let firstString = 'Hello!'
console.log(firstString.length) // --> gives the length of the string
// now to know the positions of the characters in the string with the help of indices
console.log(firstString[6])
let gibberish = 'wfuijkfwrfkjlw45328952oi#~!%$$$$$$!!#2'
console.log(gibberish[gibberish.length - 1]) // --> this returned the value of the highest index
// String are immutable in JavaScript

// String Methods
// Changing to upper case
let msg = 'hello'
console.log(msg.toUpperCase()) // --> changes to upper case
let msg1 = 'THIS IS JAVASCRIPT'
console.log(msg1.toLowerCase()) // --> changes to lower case
console.log(msg1.charAt(8)) // --> returns the value when index is provided
const paragraph =
  'This is a paragraph with the following things, which might not make any sense'
console.log(paragraph.lastIndexOf('This')) // --> this gives the index when character of the value is requested
const trimValue = '         This might be trimmed         '
console.log(trimValue.trim()) // --> trims the spaces
const color = '           blue   '
console.log(color.trim().toUpperCase()) // --> this will trim then change to Uppercase
const newColor = ' gre  en '
console.log(newColor.trim().toUpperCase())
// continue from 005 more string methods
// when the index is returned as -1 it means that it's not available
// Slice Method
let slicedValue = 'BasketBall'
console.log(slicedValue.slice(6)) // --> it slices upto the sixth index and returns the rest of the string
// Replace Method
let opinion = 'Stranger things is great'
console.log(opinion.replace('great', 'meh')) // --> so in this case the great got replaced with meh
let laugh = 'ha ha ha'
console.log(laugh.replace('ha', 'hehe')) // --> so in this case only the first hehe got replaced
// Escape Sequences
let isMood = 'This is an "awesome" thing' // \"\" this is how it's done in double quotes'
console.log(isMood)
console.log('HELLO\nGOODBYE!')
// console.log("\") --> this throws an error
// String Literals
console.log(`I have ${5 + 5} apples`) // ${} --> this is a string literal, anything can be written in it
console.log(`Your bill is $${6 + 6}`)
let userName = 'AegonWhatever'
console.log(`Welcome back ${userName.toUpperCase()}!`)
let animal = 'Dog'
let sound = 'Bow!'
console.log(`The ${animal} barks ${sound}`)

let item = 'Carrot'
let quantity = 1.5
let price = 50
console.log(
  `You bought ${item} for ${quantity} kg and your total price is: ${1.5 * 50}`,
)
let minAge = 18
let yourAge = 16
console.log(
  `The minimum age for a drivers license should be ${minAge} your still ${yourAge} please come back after ${
    minAge - yourAge
  } years`,
)
