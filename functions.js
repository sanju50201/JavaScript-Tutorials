// This is a program to find the averages of numbers using a function
let a = 5
let b = 6
let c = 7
// function for average of numbers & this function has parameters
function onePlusAvg(x, y) {
  return Math.round(1 + (x + y) / 2)
}
// calling the function
console.log('Average of a & b are: ', onePlusAvg(a, b))
console.log('Average of c & b are: ', onePlusAvg(c, b))
console.log('Average of a & c are: ', onePlusAvg(a, c))

// this function has no parameters in it, and this is an arrow function
const hello = () => {
  console.log('Hello!')
}
hello() // calling the function

const sum = (p, q) => {
  return p + q
}
console.log(sum(8, 8)) // calling the function

let sub = (r, s) => {
  return r - s
}
console.log(sub(8 - 7))
