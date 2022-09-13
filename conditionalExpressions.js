let a = prompt("Hey, What's your age? ")
a = Number.parseInt(a) // Conversion of string to number --> typecasting is done here
console.log(typeof a) // the value is always stored in the form of string
// Condtional Staments 

// If statement --> if the statement is true it runs or else it stops
/**if else --> if a condition is true in else, the code inside else block prints 
if a condition is satisified in if that code will be printed**/
// If else if --> using multiple if conditions in a code
if (a < 0) {
  alert("This is a invalid age!")
}
else if (a < 9) {
  alert("You are a kid and you cannot drive")
} else if (a < 18 && a >= 9) {
  alert("You are still a kid, and you can drive after you turn 18")
}
else if (a >= 85) {
  alert("You are too old to drive, better take some help")
}
else {
  alert("You are in a valid age, and you can drive")
}

const expr = "Jett"
switch (expr) {
  case 'Jett':
    console.log("Korean girl who throws knifes")
    break;
  case 'Raze':
    console.log("Bomb Bot girl")
    break;
  case 'Reyna':
    console.log("Hottest Chick in the game")
    break;
  default:
    console.log("This is not a valorant character")
    break;
}
