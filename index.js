let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ''

let player = {
    name : 'Karan',
    chips : '145'
}

document.getElementById('player').textContent = player.name + ' : $' + player.chips

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        message = 'Drawing new card from the deck'
        document.getElementById('message').textContent = message
        let newNumber = getRandomCard()
        sum += newNumber
        cards.push(newNumber)
        renderGame()
    }
}

function startGame() {
    isAlive = true
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard()
    cards = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber >= 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function renderGame() {
    if (sum < 21) {
        message = 'Do you want to draw a new card ?'
    } else if (sum === 21) {
        message = "You've got blackjack"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    document.getElementById('message').textContent = message
    document.querySelector('#sum').textContent = 'Sum : ' +sum
    document.getElementById('card').textContent = 'Cards : '
    for (i=0; i<cards.length; i++) {
        document.getElementById('card').textContent += cards[i] + ' '
    }
    
}
