function multiply(a, b) {
  if (typeof b === 'undefined') {
    b = 1
  }
  return a * b
}
// the below is same as the above
function multiply1(a, b) {
  b = typeof b === 'undefined' ? 1 : y
  return a * b
}

// the default parameter way

function paramMultiply(a, b = 1) {
  return a * b
}

const greet = (person, greeting = 'Hey!') => {
  console.log(`${greeting}, ${person}! `)
}

// Spread
// for functions

const colors = ['red', 'green', 'blue', 'yellow']
const giveMeFour = (a, b, c, d) => {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}
/**
 ... what this does it divides the array 
 into separate arrays arguments and then returns it
  individually  
 */

/**
In Array Literals
it creates an array using the existing array and
spreads the elements into a new array
 */

const animals = ['Tiger', 'Lion', 'Elephant', 'Rhino']
const birds = ['Penguin', 'Falcon', 'Parrot', 'Pigeon']
const fishes = ['Shark', 'dolphin', 'Betta', 'Cichlid']

const landAndFlight = [...animals, ...birds] // the order matters

const animalCopy = [...animals]

/**
 * Object Literals
 * copies properties from one object into another
 * literal, or the destination object
 */

const feline = {
  legs: 4,
  family: 'Feline',
}
const canine = {
  legs: 4,
  family: 'Canine',
  furry: true,
}

const dogs = {
  ...canine,
  isPet: true,
  isAdorable: true,
}

const cats = {
  ...feline,
  isGrumpy: true,
  personality: 'Unpredictable',
}

const dogsAndCats = { ...dogs, ...cats } // the properties with same keys were over ridden

const random = ['hello', { ...dogsAndCats }] // string and an object

// Argument Objects

function sum() {
  // it is not a real array, need to convert it to an array like shown below
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal
  })
}

// Argument Objects doesn't work for arrow functions

const multiplies = () => {
  console.log(arguments)
}

// REST -- this is easy, with newer additions which
// eliminates argument objects

function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal
  })
}

// rest can be used in an arrow function

const product = (...values) => {
  return values.reduce((total, currVal) => {
    return total * currVal
  })
}

// Destructuring

// Array Destructuring

const winners = ['Lijun Chen', 'Luis Javier Mosquera', 'Mirko Zanni']

const [gold, silver, bronze] = winners

const [first, , third] = winners // , skips an element in an array

const [winner, ...others] = winners // using rest

// Object Destructuring

const lifter = {
  firstName: 'Lijun',
  last: 'Chen',
  country: 'China',
  result: 'gold',
}

const { firstName, last } = lifter

const { country: Nation, result: status } = lifter

const nestedWinners = [
  {
    name: 'Lijun Chen',
    country: 'China',
    Result: 'gold',
  },
  {
    name: 'Luis Javier Mosquera',
    country: 'Colombia',
    Result: 'Silver',
  },
  {
    name: 'Mirko Zanni',
    country: 'Italy',
    result: 'Bronze',
  },
]
const [, , { result }] = nestedWinners

// PARAM destructuring
const lifter1 = {
  first: 'Lijun',
  last: 'Chen',
  result: 'gold',
}
function print(person) {
  const { first, last } = person
  return `${first} ${last}`
}

const print1 = ({ first, last }) => {
  return `${first} ${last}`
}

const response = ['HTTP/1.1 ', '200 OK', 'application/json']

const parseResponse = ([protocol, statusCode, contentType]) => {
  return `Status: ${statusCode}`
}
