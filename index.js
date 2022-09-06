let firstNumber =11
let secondNumber = 10
let total = firstNumber + secondNumber
let hasBlackjack = false
let isAlive = true
let message = ''

function startGame() {
    if (total < 21) {
        message = 'Do you want to draw a new card ?'
    } else if (total === 21) {
        message = "You've got blackjack"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    document.getElementById('message-el').textContent = message
}

