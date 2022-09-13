// If condition
// Example 1
if (1 !== 1) {
  console.log("It's true")
}
// Example 2
let age = 18
if (age >= 18) {
  console.log('You are eligible for DL')
}
// Example 3
let rating = 5
if (rating === 5) {
  console.log('You are an ideal Employee')
}
// Example 4
let num = 12
if (num % 2 === 0 && num % 3 === 0) {
  console.log('The number is divisible by 2 and 3')
}
// If else condition
let yourAge = 21
if (yourAge >= 18) {
  console.log('You are eligible for DL')
} else {
  console.log('You are not eligible for DL')
}
// Else if condition
let yourRating = 4
if (yourRating === 5) {
  console.log('EXCELLENT!')
} else if (yourRating <= 5 && yourRating >= 2) {
  console.log('GOOD PERFORMANCE, IMPROVE')
} else if (yourRating <= 1 && yourRating >= 0) {
  console.log('YOU ARE BAD!')
} else {
  console.log('SELECTED OPTION NOT VALID')
}
let highScore = 1500
let userScore = 1500
if (userScore > highScore) {
  console.log(`You have the high score of ${userScore}`)
  userScore = highScore
} else if (userScore >= highScore) {
  console.log(
    `Congratulations! You have matched the high score of ${highScore}`,
  )
} else {
  console.log(`Good Game, but you didn't cross the high score of ${highScore}`)
}
// Nested Loops
let password = 'ThisIsAGoodPassword'

if (password.length >= 8) {
  if (password.indexOf(' ') === -1) {
    console.log('Password is Valid')
  } else {
    console.log("Password is long enough, but should'nt contain spaces")
  }
} else {
  console.log('Please check your password')
}

/**  TRUTHY AND FALSY
Everything in JavaScript is truthy except for the following
false, 0, '', null, undefined, and NaN
*/
let truthNum = 0
if (truthNum) {
  console.log('TRUTHY')
} else {
  console.log('FALSY')
}
// Demonstration of the above
let isLoggedIn = 'sanju'
if (isLoggedIn) {
  console.log('LOGGED IN!')
} else {
  console.log('PLEASE LOG IN!')
}
