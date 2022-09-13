// // For Loop --> it iterates through the loop when the condition is sastisfied
for (i = 0; i < 5; i++) {
    console.log(i) // this condition runs from 0 upto (n-1)
  }
  // Program to add N natural Numbers
  /*
  a thing to remember is that when you use var it is valid throughout the code and the scope is available
  whereas when you use let the scope is limited only to the for loop in the case, and const doesn't 
  return any values as it is a constant value which is declared
  */
  let sum = 0
  let n = prompt("Enter your number: ") // asking the user for input
  n = Number.parseInt(n) // converting all the string input to number
  for (var i = 0; i < n; i++) { // looping through untill the staement is true
    sum += (i + 1) // (i+1) is used because the loop starts from 0
  }
  console.log("The sum of " + n + " natural numbers is " + sum)
  console.log("The Number is", i)
  // Program for factorial of numbers
  let fact = 1 // It should start from 1
  let num1 = parseInt(prompt("Enter your number: "))
  for (i = 1; i <= num1; i++) { // looping through until the condition is true
    fact *= i // logic
  }
  console.log("The factorial of " + num1 + " numbers is: " + fact)
  
  // program to print numbers
  for (i = 3; i < 10; i++) {
    console.log(i)
  }
  for (i = 0; i < 5; i++) {
    console.log("I love JavaScript")
  }
  // A program for infinite for loop
  for (i = 1; i > 0; i++) {
    console.log("JavaScript")
  }
  
  // FOR IN loop
  
  let obj = {
    Sanjith: 85,
    Punith: 84,
    Sagar: 56,
    Rakesh: 12
  }
  for (let a in obj) {
    console.log(a) // --> this returns only the keys of the list
    console.log("Marks of " + a + " are " + obj[a]) // printing out the list with keys and values
  }
  
  // Student list program
  let obj = {
    name: "Sanjith",
    class: 12,
    age: 18
  }
  for (let a in obj) {
    console.log(`${a} : ${obj[a]}`) // can use => or : to print out the values for keys and their values
  }
  
  // // Updating info in the list
  let list = {
    Sanjith: 35000,
    Sagar: 25000,
    Rakesh: 50000
  }
  for (let a in list) {
    let salary = "$" + list[a]
    console.log(`${a} : ${salary}`)
  }
  for in loop in Strings
  let val = "code"
  for (let a in val) {
    console.log(a)  // --> returns the numbers
    console.log(val[a]) // --> returns the strings 
  }
  // for in loop for arrays
  let arr = ['Sanjith', 12, 18]
  for (let x in arr) {
    console.log(arr[x])
  }
  
  // for of loop
  for (let b of "Sanjith") {
    console.log(b)
  }
  