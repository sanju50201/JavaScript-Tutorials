// short hand object properties

const reviews = [5, 4.8, 3.9, 3.5, 2.9]

const getStats = (arr) => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const sum = reviews.reduce((sum, r) => sum + r)
  const avg = sum / arr.length
  return {
    max,
    min,
    sum,
    avg,
  }
}

const stats = getStats(reviews)

// computed properties

const role = 'host'
const person = 'James Smith'
const role2 = 'Director'
const person2 = 'James Webb'

// const team = {}
// team[role] = person
// team[role2] = person2

// with the help of computed properties --> we can a use a variable as a key name

const team = {
  [role]: person,
  [role2]: person2,
}
// without [] we get the keys but not the values

// not using computed properties
// const newFunction = (obj, key, value) => {
//   const copy = {
//     ...obj,
//   }
//   copy[key] = value
//   return copy
// }

// using computed properties
// with implicit return
const addProp = (obj, k, v) => {
  return {
    ...obj,
    [k]: v,
  }
}

// without implicit return
const newAddProp = (obj, k, v) => ({
  ...obj,
  [k]: v,
})

const result = newAddProp(team, 'Happy', ':)')

// We can add function properties as objects, which is called methods

// function add(x, y) {
//   return x + y
// }

// const math = {
//   add,
// }

const math = {
  add: function add(x, y) {
    return x + y
  },
  multiply: function multiply(a, b) {
    return a * b
  },
}

const auth = {
  userName: 'sanju50201',
  logIn(userName) {
    console.log('LOGGED IN!')
  },
  logOut(userName) {
    console.log('LOGOUT!')
  },
}

