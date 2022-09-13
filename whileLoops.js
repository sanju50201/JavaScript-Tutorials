// while loop
let n = prompt("Enter a  number:") // taking input from the user
n = Number.parseInt(n) // converting to string 
let i = 10
while (i < n) {
  console.log(i) // condition
  i++ // incrementing the value
}

let num = 0
let x = 0
while (n < 3) {
  n++
  x += n
  console.log(x)
}

// do while loop
let n = prompt("Enter your number:")
n = Number.parseInt(n)
let i = 0
// first the block of code is excecuted 
do {
  console.log(i)
  i++
}
// then the condition runs
while (i < n)

let count = prompt("Enter your number")
do {
  console.log("Current count " + count)
  count++
}
while (count < 5)
console.log("Loop stopped")
