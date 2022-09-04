let firstNumber = 6
let secondNumber = 9
let total = firstNumber + secondNumber
let hasBlackjack = false
let isAlive = true
let message = ''

if (total < 21) {
    message = 'Do you want to draw a new card ?'
} else if (total === 21) {
    message = "You've got blackjack"
    hasBlackjack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

console.log(message)
console.log(hasBlackjack)
