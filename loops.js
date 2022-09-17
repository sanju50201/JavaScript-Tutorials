// for loops
for (let i = 0; i <= 5; i++) {
  console.log('HELLO:')
}
// for loop for square root of a number
for (let i = 1; i <= 20; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}
// for loop for numbers starting from 150 with decrements of 10 each time
for (let i = 150; i >= 0; i -= 10) {
  console.log(i)
}
// sum of natural numbers
let fact = 1
let num = 5
for (let i = 1; i <= num; i++) {
  console.log(`factorial of ${num} is ${(fact *= i)}`)
}
let examScores = [98, 100, 78, 56, 65, 89]
for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i])
}
/**
 * the below program has different objects inside an object
 * and to find out the individual scores of each person we
 * use a for loop to loop through and find the key pairs using
 * string literals
 */
const studentList = [
  {
    name: 'Michael',
    marks: 67,
  },
  {
    name: 'Jim',
    marks: 87,
  },
  {
    name: 'Dwight',
    marks: 93,
  },
  {
    name: 'Pam',
    marks: 78,
  },
]
// let i = studentList.length - 1; i >= 0; i-- --> this condition is when you want to show the data from the last index
for (let i = 0; i < studentList.length; i++) {
  let student = studentList[i]
  console.log(`${student.name} scored ${student.marks}`)
}
// to find the average marks
let totals = 0
for (let i = 0; i < studentList.length; i++) {
  let student = studentList[i]
  totals += student.marks
}
console.log(totals / 4)

// for loops with strings
let word = 'SANJITH'
for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]) // here the string is printed out individual from the last index
}

for (let i = 0; i < word.length; i++) {
  console.log(word[i]) // here the string is printed out individual from the last index
}
// storing the reversed string in a variable
let moreWords = 'TCEPSER'
let reversedWords = ''
for (let i = moreWords.length - 1; i >= 0; i--) {
  reversedWords += moreWords[i]
  console.log(reversedWords)
}
// console.log(reversedWords)

// Nested for loops
/**
 * in the below nested for loop, the outer loop(i) runs starting
 * from 0, and then the inner loop(j) runs starting from 10 and decrements
 * upto 0, and then inside the inner loop the inner inner loop(k) runs
 * from 10 upto 5 decrementing
 */
for (let i = 0; i < 1; i++) {
  console.log('OUTER LOOP:', i)
  for (let j = 10; j >= 0; j -= 2) {
    console.log('   INNER LOOP:', j)
    for (let k = 10; k >= 5; k -= 5) {
      console.log('     INNER INNER LOOP:', k)
    }
  }
}

let gameBoard = [
  [16, 4, 2, 4],
  [4, 8, 16, 8],
  [2, 16, 128, 64],
  [128, 2, 64, 2],
]
totalScore = 0
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i]
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j]
  }
}
console.log(totalScore)

// while loops
let num1 = 0
while (num1 < 5) {
  console.log(num1)
  num1++
}
// dummy matching numbers program
const targetNumber = Math.floor(Math.random() * 10)
let guessNumber = Math.floor(Math.random() * 10)
while (targetNumber !== guessNumber) {
  console.log(`${targetNumber} == ${guessNumber}`)
  guessNumber = Math.floor(Math.random() * 10)
}
console.log(`${targetNumber} == ${guessNumber}`)
console.log('CONGRATULATIONS YOU WIN!')

// break keyword --> to stop the loop from looping after the break point which is initialized
for (let i = 0; i < 10; i++) {
  console.log(i)
  if (i === 5) {
    break
  }
}
const targetNumber1 = Math.floor(Math.random() * 10)
let guessNumber1 = Math.floor(Math.random() * 10)
while (true) {
  if (guessNumber1 === targetNumber1) break
  guessNumber1 = Math.floor(Math.random() * 10)
}
console.log(`${targetNumber1} == ${guessNumber1}`)

// for off loop
// in this loop when an array is declared, the variable initialized will represent each indices value
// the for of loop loops through the values of the array or an object
let movieList = ['Avatar', 'Lord of the rings', 'Departed']
for (let mov of movieList) {
  console.log(mov) // no need to specify the index, since the loop variable is each for the indices of the value
}
// for of loop with strings
for (char of 'Sanjith') {
  console.log(char.toUpperCase())
}

let magicNumber = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]
// for loop
for (let i = 0; i < magicNumber.length; i++) {
  let row = magicNumber[i]
  let sum = 0
  for (let j = 0; j < row.length; j++) {
    sum += row[j]
  }
  console.log(`${row} summed to ${sum}`)
}
// for of loop
// cleaner and easier to understand
for (let row of magicNumber) {
  let sum = 0
  for (let num of row) {
    sum += num
  }
  console.log(`${row} summed to ${sum}`)
}

// where not to use for of loops
const words1 = ['black', 'ice', 'hum', 'mobile']
const words2 = ['berry', 'cream', 'burger', 'phone']
for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`)
}

// for of loop with objects
const tvShowReview = {
  'Game of thrones': 9.2,
  'Breaking Bad': 9.5,
  'House of the Dragon': 8.9,
  'Stranger Things': 8.6,
  'The Office': 9,
}
// there are two inbuilt methods to access the keys and values of the object given
// for loop for keys
// for (let tv of Object.keys(tvShowReview)) {
//   console.log(tv)
// }
// // for loop for values
// for (let tv of Object.values(tvShowReview)) {
//   console.log(tv)
// }
// for both together
for (let tv of Object.keys(tvShowReview)) {
  console.log(tv, tvShowReview[tv])
}
const ratings = Object.values(tvShowReview)
let sTotal = 0
for (let r of ratings) {
  sTotal += r
}
let avgScore = Math.floor(sTotal / ratings.length)
console.log(avgScore)

// for in Loop

let totalSalary = {
  basicSalary: 29867,
  performancePay: 4500,
  providentFund: 2623,
  others: 5960,
}
for (salary in totalSalary) {
  console.log(salary)
  console.log(totalSalary[salary])
}
// total score

let total = 0
for (let salary in totalSalary) {
  total += totalSalary[salary]
}
console.log(`Total Score of the numbers are ${total}`)

for (let prop in [77, 88, 99, 66]) {
  // we are looping through the keys not the values
  console.log(prop)
}
