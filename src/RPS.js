alert("Get ready to play Rock, Paper, Scissor!");

let userWin = 0;
let compWin = 0;
let totalGames = 0;

while (totalGames < 3) {
  const gameOptions = ["r", "p", "s"];

  let userChoice = prompt("Choose r, p, s");
  userChoice = userChoice.toLowerCase();

  if (!gameOptions.includes(userChoice)) {
    alert("Incorrect input. Please choose r, p, or s.");
    continue;
  }

  const randomIndex = Math.floor(Math.random() * gameOptions.length);
  const comChoice = gameOptions[randomIndex];

  alert("Computer chose: " + comChoice);

  if (comChoice === userChoice) {
    alert("It's a tie!");
  } else if (
    (comChoice === "r" && userChoice === "s") ||
    (comChoice === "p" && userChoice === "r") ||
    (comChoice === "s" && userChoice === "p")
  ) {
    alert("Computer wins!");
    compWin++;
  } else {
    alert("You win!");
    userWin++;
  }

  totalGames++;

  alert("User: " + userWin + " Comp: " + compWin);
}

// Determine the overall winner after 3 games
if (userWin > compWin) {
  alert("You are the overall winner!");
} else if (userWin < compWin) {
  alert("Computer is the overall winner!");
} else {
  alert("It's a tie overall!");
}
