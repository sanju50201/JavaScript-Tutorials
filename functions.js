// // This is a program to find the averages of numbers using a function
// let a = 5
// let b = 6
// let c = 7
// // function for average of numbers & this function has parameters
// function onePlusAvg(x, y) {
//   return Math.round(1 + (x + y) / 2)
// }
// // calling the function
// console.log('Average of a & b are: ', onePlusAvg(a, b))
// console.log('Average of c & b are: ', onePlusAvg(c, b))
// console.log('Average of a & c are: ', onePlusAvg(a, c))

// // this function has no parameters in it, and this is an arrow function
// const hello = () => {
//   console.log('Hello!')
// }
// hello() // calling the function

// const sum = (p, q) => {
//   return p + q
// }
// console.log(sum(8, 8)) // calling the function

// let sub = (r, s) => {
//   return r - s
// }
// console.log(sub(8 - 7))

// Functions --> bunch of code which can be reused in different places, we can call it anytime

// function userName() {
//   for (let i = 0; i < 5; i++) {
//     console.log('sanju50201')
//   }
// }
// userName()

// function rollDice() {
//   roll = Math.floor(Math.random() * 6) + 1
//   console.log(`Rolled = ${roll}`)
// }
// // we can a function inside another function ,in loops, using if etc
// function throwDice(numRolls) {
//   for (let i = 0; i < numRolls; i++) {
//     rollDice()
//   }
// }

// functions with arguments
// function greet(person) {
//   console.log(`Hi, ${person}!`)
// }
// greet()

// function with multiple arguments

// order doesn't matter
// function sum(num1, num2) {
//   return num1 + num2
// }
// sum()
// // order matters here
// function divide(a, b) {
//   return a / b
// }
// divide()

// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true
//   } else {
//     return false
//   }
// }
// // the return statement will stop a function.
// function isWinning(status) {
//   return status.toLowerCase() === 'winning'
//   console.log('We are Winning!') // this will not execute
// }

// function shadesOfPurple(arr) {
//   for (let color of arr) {
//     if (color === 'purple' || color === 'Orchid') {
//       return true
//     }
//   }
//   return false
// }

// Coding Practices

// function isValidPassword(userName, password) {
//   if (
//     password.length < 8 ||
//     password.indexOf(' ') !== -1 ||
//     password.indexOf(userName) !== -1
//   ) {
//     return false
//   }
//   return true
//   // assigning a variable to the boolean value
//   const tooShort = password.length < 8
//   const hasSpaces = password.indexOf(' ') !== -1
//   const similarUserName = password.indexOf(userName) !== -1
//   if (!tooShort || !hasSpaces || !similarUserName) {
//     return true
//   }
//   return false
// }

// function averageSum(arr) {
//   let total = 0
//   for (let num of arr) {
//     total += num
//   }
//   let result = total / arr.length
//   return result
// }

// function pangram(sentence) {
//   let casedSentence = sentence.toLowerCase()
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (casedSentence.indexOf(char) === -1) {
//       return false
//     }
//   }
//   return true
// }

// 1st approach
function cardGame() {
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'A',
    'J',
    'K',
    'Q',
  ]
  //  the below is for the first array
  // const valIdx = Math.floor(Math.random() * values.length)
  // const value = values[valIdx]
  // the below is for the second array with suits
  // const suIdx = Math.floor(Math.random() * suits.length)
  // const suit = suits[suIdx]
  // returning the object
  const value = pick(values)
  const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs']
  const suit = pick(suits)
  return { value: value, suit: suit }
}

// 2nd approach
function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}
