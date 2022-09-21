// ARRAY CALLBACK METHODS
// forEach --> takes whatever the element given at passes it to the each element

const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800]
numbers.forEach(function (num) {
  //   console.log(num)
})
// this below is a standalone function which can be used when needed to
function triple(n) {
  console.log(n * 3)
}
numbers.forEach(triple)

// the below method can be used when you need the index as well
numbers.forEach(function (num, idx) {
  console.log(idx, num)
})

const novelList = [
  {
    title: 'Fire and Blood',
    author: 'GRRM',
    rating: 9.7,
  },
  {
    title: 'Girl in the room 105',
    author: 'Chethan Bhagat',
    rating: 8.7,
  },
  {
    title: 'The NoteBook',
    author: 'Nicolas Spark',
    rating: 8.5,
  },
]

// forEach
novelList.forEach(function (book) {
  console.log(book.title.toUpperCase())
})
// for of
for (let book of novelList) {
  console.log(book.title.toUpperCase())
}
// for
for (let i = 0; i < novelList.length; i++) {
  console.log(novelList[i].title.toUpperCase())
}

// Maps
const numbers = [10, 20, 33, 40, 50, 75]
const texts = ['Hello', 'Hey', 'Sup', 'Whats Up']

const doubles = numbers.map(function (num) {
  return num * 2
})

const text = texts.map(function (values) {
  const casedValues = values.toUpperCase().split('').join('.') // --> this method converted the string to uppercase and then split it into individual arrays and then joined it with a new string --> which is what a join method does
  return casedValues
})

const evenNumbers = numbers.map(function (n) {
  return [
    {
      value: n,
      isEven: n % 2 === 0,
    },
  ]
})

const bookTitles = [
  {
    title: 'Good Omen',
    authors: ['Neil Gaiman', 'Terry Pratchett'],
    rating: 4.5,
  },
  {
    title: 'Heads You Lose',
    authors: ['Lisa Lutz', 'David Hayward'],
    rating: 3.7,
  },
  {
    title: 'Between the Lines',
    authors: ['Jodi Picoult', 'Samantha van Leer'],
    rating: 4.8,
  },
]

// this function returns the title

const titles = bookTitles.map(function (b) {
  return b.title.toUpperCase()
})
const authors = bookTitles.map(function (b) {
  return b.authors
})
const rating = bookTitles.map(function (b) {
  return b.rating
})

// Arrow Functions

const square = (x) => {
  return x * x
}
// if there is only one parameter you can leave the parameter off
const isEVen = (x) => {
  return x % 2 === 0
}
const multiply = (x, y) => {
  return x * y
}

const greet = () => {
  console.log('Hello!')
}

// Implicit Returns --> no need to write the return keyword

const square = (x) => x * x // completely valid function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// all the below functions do the same exact thing
const doubles = numbers.map(function (n) {
  return n * 2 // regular function expression
})
const doubles1 = numbers.map((n) => {
  return n * 2 // arrow function with a return statement
})
const doubles3 = numbers.map((n) => n * 2) // --> arrow function

const parityList = numbers.map(function (n) {
  if (n % 2 === 0) {
    return 'true'
  }
  return 'odd'
})

const parityList1 = numbers.map((num) => {
  if (num % 2 === 0) {
    return 'even'
  }
  return 'odd'
})

// no return statement
const parityList2 = numbers.map((num) => (n = num % 2 === 0 ? 'even' : 'odd'))

// find method
let movieList = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubler',
  'Mr. Deeds',
]

const movie = movieList.find((movie) => {
  return movie.includes('Mrs')
})

const movie1 = movieList.find((m) => m.indexOf('Mrs') === 0)

// rating for the book

const bookByRating = bookTitles.find((b) => {
  return b.rating <= 3.7
})
const bookByRating2 = bookTitles.find((b1) => b1.rating >= 4)

const bookByAuthor = bookTitles.find((a) => {
  return a.authors.includes('Lisa Lutz')
})
const bookByAuthor2 = bookTitles.find(
  (a1) => a1.authors.indexOf('David ') === 0,
)

// filter method
// filters out the elements in an array, object etc when the function is passed
const nums = [3, 4, 12, 16, 18, 15, 21, 24, 30]
const odds = nums.filter((n) => n % 2 === 1)
const even = nums.filter((n) => n % 2 === 0)

const divisible = nums.filter((n) => n % 2 === 0 && n % 3 === 0)

const books = [
  {
    titles: 'the Squire',
    authors: ['Nadia Shamas', 'Sara Alfageeh'],
    ratings: 4.5,
    genre: ['Action', 'Fantasy'],
  },
  {
    titles: 'the Black Out',
    authors: ['Tiffany D Jackson', 'Nic Stone'],
    ratings: 4.1,
    genre: ['Dark', 'Fantasy'],
  },
  {
    titles: 'Sisters of the Snake',
    authors: ['Sasha Nanua', 'Sarena Nanua'],
    ratings: 2.5,
    genre: ['Drama', 'Romance'],
  },
  {
    titles: 'Beyond the end of the world',
    authors: ['Amie Kaufman', 'Meagan Spooner'],
    ratings: 3.8,
    genre: ['Thriller', 'Crime'],
  },
  {
    titles: 'My Contrary Mary',
    authors: ['Cynthia Hand', 'Brodi Ashton'],
    ratings: 1.9,
    genre: ['Period Drama', 'Suspense'],
  },
  {
    titles: 'Tiny Pretty Things',
    authors: ['Sona CharaiPotra', 'Dhonielle Clayton'],
    ratings: 4.9,
    genre: ['Romance', 'Women Empowerement'],
  },
]

const goodBooks = books.filter((b) => b.ratings >= 4)
const averageBooks = books.filter((b) => b.ratings < 4 && b.ratings >= 2)
const badBooks = books.filter((b) => b.ratings < 2)

const fantasyBooks = books.filter((b) => b.genre.includes('Fantasy'))

const romanceActionBooks = books.filter(
  (book) => book.genre.includes('Romance') || book.genre.includes('Action'),
)

const query = 'The'

const results = books.filter((book) => {
  title = book.titles.toLowerCase()
  return title.includes(query.toLowerCase())
})

// Sorting

const numberLists = [55, 6.7, 8.9, 89.9, 300, 1000, 5999]
const badSort = numberLists.slice().sort()
const ascSort = numberLists.slice().sort((a, b) => a - b) // this sorts the array of numbers in an ascending order
/**
 * when we have a negative number a sorts before a
 * when we have a positive number b sorts before a
 * if two numbers are equal then they'll be treated as equals
 */
// it mutates the original array when sort is used, hence we are duplicating the array with slice method and sorting
const descSort = numberLists.slice().sort((a, b) => b - a)

const books1 = [
  {
    titles: 'the Squire',
    authors: ['Nadia Shamas', 'Sara Alfageeh'],
    ratings: 4.5,
    genre: ['Action', 'Fantasy'],
  },
  {
    titles: 'the Black Out',
    authors: ['Tiffany D Jackson', 'Nic Stone'],
    ratings: 4.1,
    genre: ['Dark', 'Fantasy'],
  },
  {
    titles: 'Sisters of the Snake',
    authors: ['Sasha Nanua', 'Sarena Nanua'],
    ratings: 2.5,
    genre: ['Drama', 'Romance'],
  },
  {
    titles: 'Beyond the end of the world',
    authors: ['Amie Kaufman', 'Meagan Spooner'],
    ratings: 3.8,
    genre: ['Thriller', 'Crime'],
  },
  {
    titles: 'My Contrary Mary',
    authors: ['Cynthia Hand', 'Brodi Ashton'],
    ratings: 1.9,
    genre: ['Period Drama', 'Suspense'],
  },
  {
    titles: 'Tiny Pretty Things',
    authors: ['Sona CharaiPotra', 'Dhonielle Clayton'],
    ratings: 4.9,
    genre: ['Romance', 'Women Empowerement'],
  },
]

const ratingsFromLow = books1.slice().sort((a, b) => a.ratings - b.ratings)
const ratingsFromHigh = books1.slice().sort((a, b) => b.ratings - a.ratings)

// reduce --> takes an array and reduces it to a single value

const productValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const totalProduct = productValues.reduce((total, currentValue) => {
  return total * currentValue
})

const grades = [55, 100, 99, 87, 81, 35]

const highest = grades.reduce((total, currentValue) => {
  if (currentValue > total) {
    return currentValue
  } else {
    return total
  }
})
// total     currentValue      return
// 55            100             100
// 100            99             100
// 100            87             100
// 100            81             100
// 100            35             100
// 100

const leastMarks = grades.reduce((min, curVal) => {
  // return Math.min(min, curVal)
  if (min < curVal) {
    return min
  } else {
    return curVal
  }
})

const listOfNums = [10, 20, 30, 40, 50, 60]

const sum = listOfNums.reduce((total, currVal) => {
  return total + currVal
}, 100) // adding an initial value

const votes = [
  'y',
  'absent',
  'absent',
  'y',
  'n',
  'y',
  'y',
  'n',
  'y',
  'n',
  'y',
  'n',
]

const result = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++
  } else {
    tally[val] = 1
  }
  return tally
}, {})

const groupByRatings = books1.reduce((groupedBooks, book) => {
  const key = Math.floor(books1.ratings)
  if (!groupedBooks[key]) groupedBooks[key] = []
  groupedBooks[key].push(book)
  return groupedBooks
}, {})
