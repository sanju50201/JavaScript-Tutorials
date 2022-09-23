// const btn = document.querySelector('#clicker')

// btn.onclick = function () {
//   console.log('You Clicked Me')
// }
// btn.ondblclick = () => {
//   console.log('GET LOST')
// }

// const btn = document.querySelector('button')

// btn.onclick = () => {
//   console.log('You Clicked Me')
// }

// // the first one gets overridden
// btn.onclick = () => {
//   console.log('GET LOST')
// }

// addEventListener
// here it can have multiple event listeners which will work without having to override the previous one
// btn.addEventListener('click', () => {
//   console.log('Clicked')
// })

// btn.addEventListener('click', () => {
//   console.log('Clicked Again')
// })

// btn.addEventListener('mouseover', () => {
//   btn.innerText = 'You Changed it!'
// })

// btn.addEventListener('mouseout', () => {
//   btn.innerText = 'CLICK ME'
// })

// window.addEventListener('scroll', () => {
//   console.log('Scroll Was Successful')
// })

// const btn = document.querySelector('button')

// btn.addEventListener('mouseover', () => {
//   const height = Math.floor(Math.random() * window.innerHeight)
//   const width = Math.floor(Math.random() * window.innerWidth)
//   console.log('MOUSE OVERED')
//   btn.style.top = `${height}px`
//   btn.style.left = `${width}px`
// })

// btn.addEventListener('click', () => {
//   btn.innerText = 'YOU GOT ME!!'
//   document.body.style.backgroundColor = 'blue'
// })

const colors = ['red', 'green', 'yellow', 'blue', 'violet', 'orange', 'pink']

// const printColor = (box) => {
//   const h1 = document.querySelector('h1')
//   h1.style.color = box.style.backgroundColor
// }
// const container = document.querySelector('#boxes')
// for (let color of colors) {
//   const box = document.createElement('div')
//   box.style.backgroundColor = color
//   box.classList.add('box')
//   container.append(box)
//   box.addEventListener('click', () => {
//     printColor(box)
//   })
// }

// this is with the use of this keyword
const changeColor = function (evt) {
  console.log(evt)
  const h1 = document.querySelector('h1')
  h1.style.color = this.style.backgroundColor
}

const container = document.querySelector('#boxes')

for (let color of colors) {
  const box = document.createElement('div')
  box.style.backgroundColor = color
  box.classList.add('box')
  container.append(box)
  box.addEventListener('click', changeColor)
}

document.body.addEventListener('keypress', (e) => {
  console.log(e)
})
