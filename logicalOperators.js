// AND(&&) OPERATOR
let password = 'goodPassword'
// both the conditions should be true for it to be considered as AND operator
if (password.length >= 8 && password.indexOf(' ') === -1) {
  console.log('VALID PASSWORD')
} else {
  console.log('INVALID PASSWORD')
}

let num = 2
if (num >= 1 && num <= 10) {
  console.log('The Number exists between 1 and 10')
} else {
  console.log('The Number does not exist between 1 and 10')
}
// OR(||) operator
// either one of the conditions should be true for it to be OR
let yourAge = 6
if (yourAge < 6 || yourAge >= 65) {
  console.log('You can enter for free')
} else {
  console.log('You need to pay $5')
}

let color = 'Orchid'
if (
  color === 'Purple' ||
  color === 'Violet' ||
  color === 'Lilac' ||
  color === 'Orchid'
) {
  console.log('You belong to the shades of purple')
} else {
  console.log('Get Outta Here!')
}
// NOT (!)operator
// it acts like a negate to the condition
let userLoggedIn
if (!userLoggedIn) {
  console.log('Please Log In!')
}
// both the if conditions imply the same thing
let flavor = 'chocolate'
if (flavor !== 'vanilla' && flavor !== 'chocolate') {
  console.log("We don't have that flavor")
}
if (!(flavor === 'vanilla' || flavor === 'chocolate')) {
}
// Operator Precedence
// ! > && > ||
// but when () is applied that is given the first preference
