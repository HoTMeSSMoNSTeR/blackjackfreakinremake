// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let cardSumEl = document.getElementById("cardsum-element")
let cardEl = document.getElementById("cards-element")
let messageEl = document.getElementById("message-element")
// console.log(cardSumEl)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else { return randomNumber }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

// the value 14 is the ace!

console.log(getRandomCard)

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    cardSumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got blackjack!!"
        hasBlackjack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function drawNewCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        console.log(CanvasCaptureMediaStreamTrack)
        renderGame()
    }

}

