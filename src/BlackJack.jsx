// Initial scores
let player = 0;
let dealer = 0;

// Random card values
const cardValues = []

// Initiating function
function startBlackjack() {
  
  // Welcome message
  alert("Get ready to play Black Jack!");

  // Initial scores
  let initialPlayerScore = player;
  let initialDealerScore = dealer;

  // Game results
  GameResults()
}

  // Probability of card nos. for dealer and player
  const gameSet = [4, 5, 6, 7, 8];

  // Random set generator
  let random = Math.floor(Math.random(gameSet) * gameSet.length);
  random = gameSet[random];

  // Player turn
  alert("Player's turn");

  player += random;

  let playerChoice = window.confirm("You got " + random + ". Now your total is " + player + ", Do you want to continue?")
while ( playerChoice === true && player < 22 ) {
  playerChoice = window.confirm("You got " + random + ". Now your total is " + player + ", Do you want to continue?");
  player += random;
}

  // Dealer chance
  alert("Now Dealers turn");
  while (dealer <= player && dealer < 22) {
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
    alert("Dealer won!");
  } else if (dealer === 21) {
    alert("Dealer BLACKJACK!");
  } else {
    alert("Dealer Lost!");
  }


function BlackJack() {
  return (
    <div>
      <button type="button" onClick={startBlackjack}>Play Black Jack</button>
    </div>
  )
}

export default BlackJack;