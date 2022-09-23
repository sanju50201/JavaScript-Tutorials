// Window is the global scope of the browser

function hello() {
  console.log('hello')
  console.log(this)
}

// var is added to the window since it has global scope
// whereas let and const is not present in the window object

const guy = {
  first: 'Sanjith',
  last: 'Kumar',
  nickName: 'Sanju',
  fullName() {
    const { first, last, nickName } = this // destructuring
    return `${first} ${last} AKA ${nickName}`
  },
  printBio() {
    console.log(this)
    const fullName = this.fullName()
    console.log(`${fullName} is a person.`)
  },
  laugh: () => {
    console.log(this)
    console.log(`${this.nickName} says HAHAHAHAHAHA`)
  },
}
const bio = guy.printBio // this is referring to the window not the object

// in the above example this refers to the object

// the value of this depends on the invocation context of the function that is used in

const annoyingWords = {
  phrases: ['K', 'SSUP', 'Basically', 'Is that so', "What's Up", 'Cho Cho'],
  pickPhrase() {
    const { phrases } = this
    const idx = Math.floor(Math.random() * phrases.length)
    return phrases[idx]
  },
  start() {
    this.timerId = setInterval(() => {
      // this.timerId stores the whole function
      this // this is reference to the object
      console.log(this.pickPhrase())
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId)
  },
}
function makeDeck() {
  const deck = []
  const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
  const values = '2,3,4,5,6,7,8,9,10,J,K,Q,A'
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({
        value,
        suit,
      })
    }
  }
  return deck
}
function drawCard(deck) {
  return deck.pop()
}
// const myDeck = makeDeck()
// const card1 = drawCard(myDeck)

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['Spades', 'Hearts', 'Diamonds', 'Clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,K,Q,A',
  initializeDeck() {
    const { deck, suits, values } = this
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit,
        })
      }
    }
    // return deck
  },
  drawCard() {
    const card = this.deck.pop()
    this.drawnCards.push(card)
    return card
  },
  drawMultipleCards(numCards) {
    const cards = []
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard())
    }
    return cards
  },
  shuffle() {
    const { deck } = this
    // loop backwards
    for (let i = deck.length - 1; i > 0; i--) {
      // pick random index before the current element
      let j = Math.floor(Math.random() * (i + 1))
      // swap
      deck[i], (deck[j] = deck[j]), deck[i]
    }
  },
}
