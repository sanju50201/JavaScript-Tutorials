/**  objects are a collection of properties which 
has a key value pair which holds a data to that 
key assigned, like we use index to get the data in an array
here we use a key, where the data will be returned */

const stepSetGoData = {
  name: 'Sanjith',
  totalSteps: 560045,
  heartRate: 654,
  avgSleep: '4:12',
  calorieBurns: 5667,
}
/**  to get the data of specific part, 
we need to pass the key of the data we're trying to get
when we create an object, the keys are automatically converted
into strings
*/
console.log(stepSetGoData)
console.log(stepSetGoData.avgSleep) // -> to get the data individually

const numbers = {
  14: 'Fourteen',
  45: 'Forty Five',
  20: 'Twenty',
  '2 guitars': 'great song',
}
// here in this case to get the data, we need to
console.log(numbers[14])
console.log(numbers['2 guitars']) // while this is not a valid way to name your variables, this will work with the objects as you are assigning the key

const colorPallette = {
  brown: '#433125',
  green: '#809453',
  grey: '#8E8E8E',
  '#985309': 'orange',
}
let mysteryColor = 'green' // can be stored in a variable like this way

// Adding data in an object

const userReviews = {} // an empty object
userReviews['sanju50301'] = 4.5 // can use [] notation
userReviews.zoro342 = 2.5 // can use . notation
// unary operators can be used
userReviews.sanju50301 += 0.5

// nested objects
// so the below object contains the details of the student using a nested object
const student = {
  name1: 'Sanjith',
  class: 12,
  age: 18,
  skills: ['Coding', 'Cricket', 'Song Writing'],
  subjects: {
    Physics: 87,
    Chemistry: 97,
    Maths: 99,
  },
}
// here the avg marks of the student was found out by using the . property, i.e., by chaining it from the object name to the key value pairs
const avgMarks =
  (student.subjects.Physics +
    student.subjects.Chemistry +
    student.subjects.Maths) /
  3

//   so here in the below code, we have an array which contains a set of objects
const shoppingBag = [
  {
    name: 'Sagar',
    quantity: 5,
    price: '5000',
  },
  {
    name: 'Sanjith',
    quantity: 4,
    price: '4000',
  },
  {
    name: 'Punith',
    quantity: 3,
    price: '3000',
  },
]
// tic tac toe
const game = {
  player1: {
    name: 'Sanjith',
    playingAs: 'X',
  },
  player2: {
    name: 'Punith',
    playingAs: 'O',
  },

  board: [
    ['O', null, 'X'],
    [null, 'O', 'X'],
    ['O', null, 'X'],
  ],
}

const Pallette = {
  orange: '#764643',
  brown: '#4A2A2A',
  purple: '#4A2A45',
}
const Pallette1 = Pallette // the reference of both the objects are same
Pallette1.violet = '#644363'

// Object Array Equality
/**
 * here when the arrays and objects are compared it returns false
 * even though the arrays have the same values, because the reference address
 * is getting stored, which will be different for each array and object
 */
let nums = [1, 2, 3, 4]
// in case for the array to have same reference address
let anotherNums = nums // this will return true

const alphabet = {
  0: 'A',
  1: 'B',
  2: 'C',
}
const alphabet1 = {
  0: 'A',
  1: 'B',
  2: 'C',
}

const user = {
  userName: 'joe3345',
  email: 'joe3345@gmail.com',
  notifications: [], // if the array is changed here, the conditional statements will be executed
}
if (!user.notifications.length) {
  console.log('NO NOTIFICATIONS')
} else {
  console.log('NEW NOTIFICATIONS')
}
