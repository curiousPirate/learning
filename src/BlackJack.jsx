function randomCard() {
  const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let random = Math.floor(Math.random() * cardValues.length);
  return cardValues[random];
}

function playersTurn() {
  alert("Player's Turn!");

  let playerScore = 0;
  let playersChoice = true;

  while (playersChoice === true && playerScore < 22) {
    const randomCardValue = randomCard();
    playerScore += randomCardValue;
    playersChoice = window.confirm(
      "You got " + randomCardValue + ". And your total is " + playerScore
    );
  }

  return playerScore;
}

function dealersTurn(playerScore) {
  alert("Dealer's Turn!");

  let dealerScore = 0;

  while (dealerScore < playerScore && dealerScore < 22) {
    const randomCardValue = randomCard();
    dealerScore += randomCardValue;
    alert("Dealer got: " + randomCardValue + ".\nDealer score: " + dealerScore);
  }

  return dealerScore;
}

function GameResults(playerScore, dealerScore) {
  // Game results
  if (playerScore === 21) {
    alert("Player BLACKJACK!");
  } else if (playerScore === dealerScore) {
    alert("It's a tie!");
  } else if (playerScore > dealerScore && playerScore < 22) {
    alert("Player won!");
  } else {
    alert("Player Lost!");
  }

  if (dealerScore === 21) {
    alert("Dealer BLACKJACK!");
  } else if (dealerScore > playerScore && dealerScore < 22) {
    alert("Dealer won!");
  } else {
    alert("Dealer Lost!");
  }
}

function startBlackjack() {
  alert("Get ready to play Black Jack!");

  const playerScore = playersTurn();
  const dealerScore = dealersTurn(playerScore);

  GameResults(playerScore, dealerScore);
}

function BlackJack(playerScore) {
  return (
    <div>
      <button type="button" onClick={startBlackjack}>
        Play Black Jack
      </button>
      <div id="playerScore">Player Score: {playerScore}</div>
    </div>
  );
}

export default BlackJack;
