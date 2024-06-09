let cards = []
let sum = 0
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let gameStateEl = document.querySelector("#game-state")
let playerEl = document.querySelector("#player-el")
let gameState = false
let player = {
    name: "Someone",
    age: 18,
    chips: 200
}

player.age = parseInt(prompt("Insert your age (YOU MUST BE +18 TO PLAY BLACKJACK)"))
if(player.age < 18) {
    alert("ILLEGAL ACTIVITY DETECTED!!")
    window.location.href = "https://en.wikipedia.org/wiki/Gambling_age"
} else {
    player.name = prompt("Hello! Welcome! Please insert your name:")
}
playerEl.textContent = `${player.name}: ${player.chips}`


function startGame() {
    gameState = true
    cards = []
    cards.push(drawCard())
    cards.push(drawCard())
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
    sum = cards[0] + cards[1]
    sumEl.textContent = `Sum: ${sum}`
    checkGameState()
}

function newCard() {
    if(gameState) {
        cards.push(drawCard())
        sum += cards[cards.length-1]
        cardsEl.textContent += ` ${cards[cards.length-1]}`
        sumEl.textContent = `Sum: ${sum}`
        checkGameState()
    }    
}

function drawCard() {
    let card = Math.floor (Math.random() * 13) + 1
    
    if (card === 1) {
        return 11
    } else if (card > 10) {
        return 10
    }
    else {
        return card
    }
}

function checkGameState() {
    if(sum < 21) {
        gameStateEl.textContent = "Do you want to get another card?"
    } else if (sum === 21) {
        gameStateEl.textContent = "You got Blackjack, congratsss!"
        gameState = false
    } else {
        gameStateEl.textContent = "Oh nooo, you`re out T.T"
        gameState = false
    }
}