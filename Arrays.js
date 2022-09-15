// creating an Array
let shoppingList = ['Ice', 'Coffee', 'Maggie']
console.log(shoppingList)
// To access the data in an array, we need to
console.log(shoppingList[0])
// to access the last element in the array, we need to
console.log(shoppingList[shoppingList.length - 1])
// Modifying the array
let colors = ['red', 'green', 'yallow', 'blue']
console.log(colors)
colors[2] = 'yellow' // modified or updated the 1st index to a different value
colors[4] = 'black' // adding a new index to the array
// An alternative and better way to add elements to the array
colors[colors.length] = 'pink'
// added to the last index of the array
console.log(colors)
// The above method is preferred only if an update needs to be done

// Array Methods

// push() method:
let topSongs = [
  'Lose Yourself',
  'One Dance',
  'Bohemian Rhapsody',
  'Blinding Lights',
  'You Belong with me',
]
topSongs.push('Shape of you') // this gets added to the end of the array
let listOfNumbers = [1, 2, 3, 4, 5]
listOfNumbers.push(6, 7, 8) // the same goes here, gets added at the last
listOfNumbers.push = true
console.log(listOfNumbers)
topSongs.push(listOfNumbers)
// the below program merged two different arrays
let alphabets = ['a', 'b', 'c', 'd', 'e']
let moreAlphabets = ['f', 'g', 'h', 'i', 'j']
alphabets.push(moreAlphabets)
console.log(alphabets)
console.log(topSongs.pop()) // removed the last element
console.log(topSongs)

// Unshift
let dinner = ['dessert']
dinner.unshift('Main Course') // adding the element to the beginning of the array
dinner.unshift('Starters')
console.log(dinner)

// Shift
dinner.shift() // removes the first element in the array i.e., starters gets removed
console.log(dinner)

// Concat
let fruits = ['Mango', 'Apple']
let vegetables = ['Carrot', 'Onion']
let moreFruits = ['orange', 'green apple']
let moreVegetables = ['Chilli', 'Tomato']
console.log(fruits.concat(vegetables)) // vegetables is added with fruits
console.log(vegetables.concat(fruits)) // fruits is added with vegetables
console.log(fruits.concat(moreFruits, vegetables)) //
let everyFruitsAndVegetables = vegetables.concat(
  moreVegetables,
  fruits,
  moreFruits,
)
console.log(everyFruitsAndVegetables)

// includes()
// checks whether the element is present in the array and returns true if available and false if not available
let ingredients = ['Flour', 'Baking Powder', 'Salt', 'Sugar', 'Eggs', 'Butter']
let trueValue = ingredients.includes('Flour')
let falseValue = ingredients.includes('Corn')
console.log(trueValue)
console.log(falseValue)
// since it is going to return boolean value no need to add a comparison operator
if (ingredients.includes('Flour')) {
  console.log('I cannot eat that')
}
// indexOf()

console.log(ingredients.indexOf('Flour')) // found returns the index
console.log(ingredients.indexOf('chicken')) // not found returns -1 which is undefined

// reverse()
let letters = ['a', 'b', 'c', 'd', 'e']
console.log(letters)
let reversedLetters = letters.reverse()
console.log(reversedLetters)

// join()
// this joins the new string and the previous ones and returns a completely new string
let random = ['fire', 'ice', 'war']
console.log(random.join('_'))

let randomNumbers = [2, 4, 76, 7897, true]
console.log(randomNumbers.join(' + --> ')) // still returns a string

// slice()
let animals = ['Shark', 'dolphin', 'horse', 'cow', 'panther', 'tiger']
let waterAnimals = animals.slice(0, 2)
let herbivores = animals.slice(2, 4)
let carnivores = animals.slice(4)
// to slice the elements from the last elements in an array
let reversedSlice = animals.slice(0)
// splice()
let splicedElements = animals.splice(1, 0, 'Salmon')
console.log(animals) // an element is added between 0 & 1
let spliceAnimals = animals.splice(3, 2)
let insertAnimals = animals.slice(1, 0, 'Octopus', 'Jellyfish')

// sort() --> sorts the array and returns the array element
//sorting in javascript is done by converting the elements to a string
// and sorting them based on their UTF encoding
let attendanceList = ['Vignesh', 'Surya', 'Arya', 'Punith']
console.log(attendanceList.sort()) // -->this sorts alphabetically

let nums = [2, 54, 10000, 7486, 44]
console.log(nums.sort()) // -->this sorts based on their UTF encoding\

// CONST in Arrays
// the values of the array can change until the reference of the array remains the same --> reference type
// you can modify the array using const but you cannot assign that array to a new array
const food = ['Idli']
food.push('Dosa', 'Chapathi')
food.splice(1, 0, 'Pongal')
food.pop()
console.log(food)
// using const is a good practice to store arrays

// Nested arrays
const animalPairs = [
  ['lion', 'lioness'],
  ['duck', 'goose'],
  ['ew', 'ram'],
  ['peahen', 'peacock'],
]
animalPairs[2][0] = 'Ewe' // this changes the array element
// animalPairs[3][0] --> gives you the element what you are looking for
// adding or modifying an element
