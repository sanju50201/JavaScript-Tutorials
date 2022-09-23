// Document Object Model -- DOM

// selecting

// getElementById --> it selects the element by the id provided
// getElementsByTagName --> it selects one or more elements with the tag name -> which will be a array like but not an array
// getElementByClassName --> it selects with the class name provided in the html
// HTMLAllCollection --> an array like object but not an array

// querySelector --> a single all in one method to select a single element

// function hello() {
//   console.log('hello')
// }

// const allLIs = document.querySelectorAll('li')

// const colors = [
//   'red',
//   'green',
//   'yellow',
//   'blue',
//   'magenta',
//   'cyan',
//   'brown',
//   'orange',
// ]
// allLIs.forEach((li, idx) => {
//   const color = colors[idx]
//   li.style.color = colors[idx]
// })

const todo = document.querySelector('.todo')

// todo.style.color = 'grey'
// todo.style.textDecoration = 'line-through'
// todo.style.opacity = '50%'

