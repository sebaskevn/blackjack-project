let deck = [];

let playerSum = 0;
let dealerSum = 0;

function createDeck() {
    let suits = ["S", "C", "D", "H"];
    let values = [
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
    ];

    for (let suit of suits) {
        for (let value of values) {
          deck.push(createCard(value, suit));
        }
      }
}

for (let suit of suits) {
    for (let value of values) {
      deck.push(createCard(value, suit));
    }
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

