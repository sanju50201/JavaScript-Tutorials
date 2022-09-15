let animals = ['cat', 'dog', 'elephant', 'tiger', 'lion', 'shark']
let addedSplice = animals.splice(2, 0, 'Fish') // adding a new element
let splicedAnimal2 = animals.splice(5, 0, 'Panther')
let splicedAnimal3 = animals.splice(2, 2)
console.log(splicedAnimal3) // this is just showing what's getting deleted
console.log(animals) // this will return with the deleted element

let multipleAddition = animals.splice(3, 0, 'Cheetah', 'Bear')
console.log(animals)
let upperCase = animals.splice(0, 2, 'CAT!', 'DOGS')
