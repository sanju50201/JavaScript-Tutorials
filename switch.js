const expr = 'say_hi'
/**
 the code block was used beacuse the same message token(variable) is being used twice 
 in the program which will cause a syntax error, by keeping it in a block 
 it is specific for that block only
 **/
switch (expr) {
  case 'say_hello': {
    const message = 'hello'
    console.log(message)
    break
  }
  case 'say_hi': {
    const message = 'Hi!'
    console.log(message)
    break
  }
  default:
    break
}

// Ternary Operator
let a = 18
console.log('you can', a < 18 ? 'not drive' : 'drive')

function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00'
}
console.log('You are a member', getFee(true))
console.log('You are not a member please sign up', getFee(false))
console.log(getFee(null))

let c = 36
console.log(c > 35 ? 'yes' : 'no')

let faceEmoji = 'star'
switch (faceEmoji) {
  case 'sad face':
  case 'happy face':
    console.log('yellow')
    break
  case 'star':
    console.log('golden')
    break
  case 'lips':
  case 'heart':
    console.log('red')
    break
}
