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
// function cardGame() {
//   const values = [
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'A',
//     'J',
//     'K',
//     'Q',
//   ]
//  the below is for the first array
// const valIdx = Math.floor(Math.random() * values.length)
// const value = values[valIdx]
// the below is for the second array with suits
// const suIdx = Math.floor(Math.random() * suits.length)
// const suit = suits[suIdx]
// returning the object
//   const value = pick(values)
//   const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs']
//   const suit = pick(suits)
//   return { value: value, suit: suit }
// }

// // 2nd approach
// function pick(arr) {
//   const idx = Math.floor(Math.random() * arr.length)
//   return arr[idx]
// }
/**
 Scope --> variable visibility, where we have access to the variable
 types of scopes:
 function scope --> the variable will be accessible only within the function 
   
 */

// function lol() {
//   let name = 'Sanjith'
//   var age = 22
//   const color = 'green'
//   console.log(color, age, name) // the variables can be accessed within the function
// }

// let character = 'Naruto'
// function animeCharacters() {
//   let character = 'Sasuke'
//   console.log(character)
// }
// animeCharacters()
// console.log(character)

// if (true) {
//   let animal = 'Tiger'
// }
// console.log(animal)
// Block Scope
// function doubleArr(arr) {
//   const result = []
//   let double
//   for (num of arr) {
//     double = num * 2
//     double = result.push(double)
//   }
//   return result
// }

// Lexical Scope
// a variable declared in one function is available in the nested function in it.
// function outer() {
//   let movie = 'Departed'
//   function inner() {
//     let movie = 'End game'
//     console.log(movie.toUpperCase())
//   }
//   inner()
// }

// function outer() {
//   // let movie = 'Departed'
//   function inner() {
//     let movie = 'End game'
//     function extraInner() {
//       // let movie = 'Star Wars'
//       console.log(movie.toUpperCase())
//     }
//     extraInner()
//   }
//   inner()
// }

// function Expression --> this function is stored in a variable and the function doesn't have a name

// anonymous function
// const add = function (x, y) {
//   return x + y
// }
// // named function
// const product = function multiply(x, y) {
//   return x * y
// }

// function add(x, y) {
//   return x + y
// }
// const subtract = function (x, y) {
//   return x - y
// }
// function multiply(x, y) {
//   return x * y
// }
// const divide = function (x, y) {
//   return x / y
// }
// // calling the above functions using an array like below
// const operations = [add, subtract, multiply, divide]

// using a for of loop
// for (func of operations) {
//   let result = func(30, 5)
//   console.log(result)
// }

// const thing = {
//   doSomething: multiply,
//   doSomethingElse: divide,
// }
// Higher order functions --> operates with or on other functions

// function callThreeTimes(func) {
//   func()
//   func()
//   func()
// }

// function sad() {
//   console.log("I'M SAD!")
// }
// function angry() {
//   console.log("I'M SO PISSED!")
// }
// function happy() {
//   console.log("I'M HAPPY!")
// }
// // callThreeTimes(cry) --> we are passing a function inside a function

// function repeatNTimes(action, num) {
//   for (i = 0; i < num; i++) {
//     action()
//   }
// }
// repeatNTimes(angry, 3)

// random number picker function
// in this below function each time a random function gets picked and returns
// function pickRandom(f1, f2) {
//   let rand = Math.random()
//   console.log(rand)
//   if (rand < 0.5) {
//     f1()
//   } else {
//     f2()
//   }
// }

// the function accepts the other functions arguments

// function multiplyBy(num) {
//   return function (x) {
//     return (num *= x)
//   }
// }
// const double = multiplyBy(2)
// const triple = multiplyBy(3)

// function numInBetween(x, y) {
//   return function (num) {
//     if (x <= num && y >= num) {
//       return true
//     }
//     return false
//   }
// }
// const displayNumber = numInBetween(0, 18)
// const isGenZ = numInBetween(2001, 2022)

// Callbacks --> a function in an another function is returned with an argument which is invoked outer function

// function greetMessage() {
//   alert('Hello!')
// }
// // setTimeout(greetMessage, 5000) // inbuilt function

// // setTimeout(function () {
// //   alert('WELCOME!')
// // }, 6000)

// const btn = document.querySelector('button')
// btn.addEventListener('click', function () {
//   alert('JUST TO TEST IT!')
// })
/**
 Hoisting --> When a variable is declared it gets assigned first, 
 even if it does not store a value, so when you print out the 
 variable you will still get the output, which do not 
 contain the value, but it'll be undefined
 */

// using var -- hoisted
// console.log(animal)
// var animal = 'Tiger'
// using let -- not hoisted
// console.log(bird)
// let bird = 'Parrot'
// using const -- not hoisted
// console.log(fish)
// const fish = 'Betta'

// using functions -- hoisted

bark()
function bark() {
  console.log('BOWWWW!')
}

// using function expressions -- not hoisted
console.log(hoot) // so javascript knows it, but it is undefined
hoot()
var hoot = function () {
  console.log('HOOO HOO! ')
}
