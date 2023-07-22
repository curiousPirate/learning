alert("Get ready to play Black Jack!");

// Initial scores
let player = 0;
let dealer = 0;

// Probability of card nos. for dealer and player
const gameSet = [4, 5, 6, 7, 8]

// Random set generator
let random = Math.floor(Math.random(gameSet) * gameSet.length);
random = gameSet[random];

// Player turn
alert("Player's turn")

player += random;

let playerChoice = confirm("You got " + random + ". Now your total is " + player + ", Do you want to continue?")
while ( playerChoice === true && player < 22 ) {
  playerChoice = confirm("You got " + random + ". Now your total is " + player + ", Do you want to continue?");
  player += random;
}

// Dealer chance
alert("Now Dealers turn")
while ( dealer <= player && dealer < 22) {
      dealer += random;
      alert("Dealer's hand: " + dealer);
}

// Player game status
if (player > dealer && player < 22) {
  alert("Player won!");
} else if (dealer === 21) {
  alert("Player BLACKJACK!");
} else if (player === dealer) {
  alert("It's a tie!");
} else {
    alert("Player Lost!");
}

// Dealer game status
if (dealer > player && dealer < 22) {
  alert("Dealer won!")
} else if (dealer === 21) {
  alert("Dealer BLACKJACK!")
} else {
  alert("Dealer Lost!")
}

// ChatGPT version
function getRandomCard() {
  const gameSet = [4, 5, 6, 7, 8];
  const randomIndex = Math.floor(Math.random() * gameSet.length);
  return gameSet[randomIndex];
}

function getPlayerChoiceMessage(random, playerTotal) {
  return `You got ${random}. Now your total is ${playerTotal}. Do you want to continue?`;
}

function getPlayerTotal() {
  let playerTotal = 0;
  let playerChoice = true;

  alert("Player's turn");

  while (playerChoice === true && playerTotal < 22) {
    const random = getRandomCard();
    playerTotal += random;
    playerChoice = confirm(getPlayerChoiceMessage(random, playerTotal));
  }

  return playerTotal;
}

function getDealerTotal(playerTotal) {
  let dealerTotal = 0;

  alert("Now Dealers turn");

  while (dealerTotal <= playerTotal && dealerTotal < 22) {
    const random = getRandomCard();
    dealerTotal += random;
    alert("Dealer's hand: " + dealerTotal);
  }

  return dealerTotal;
}

function getGameStatus(playerTotal, dealerTotal) {
  if (playerTotal > dealerTotal && playerTotal < 22) {
    alert("Player won!");
  } else if (playerTotal === 21) {
    alert("Player BLACKJACK!");
  } else if (playerTotal === dealerTotal) {
    alert("It's a tie!");
  } else {
    alert("Player Lost!");
  }

  if (dealerTotal > playerTotal && dealerTotal < 22) {
    alert("Dealer won!");
  } else if (dealerTotal === 21) {
    alert("Dealer BLACKJACK!");
  } else {
    alert("Dealer Lost!");
  }
}

function playBlackJack() {
  alert("Get ready to play Black Jack!");

  const playerTotal = getPlayerTotal();
  const dealerTotal = getDealerTotal(playerTotal);

  getGameStatus(playerTotal, dealerTotal);
}

// Start the game
playBlackJack();
