function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber <= 1 / 3 || randomNumber === 0) {
    return "rock";
  } else if (randomNumber <= 2 / 3) {
    return "paper";
  } else if (randomNumber <= 1) {
    return "scissors";
  }
}
function getHumanChoice() {
  let choice = prompt("Enter your choice: rock, paper or scissors");
  console.log(choice);
  return choice;
}
function playRound(humanSelection, computerSelection) {
  let choice = humanSelection;
  let result = computerSelection;
  if (choice === "rock" && result === "rock") {
    console.log("It's a tie");
    return "It's a tie";
  } else if (choice === "rock" && result === "paper") {
    console.log("Computer wins");
    return "Computer";
  } else if (choice === "rock" && result === "scissors") {
    console.log("Human win");
    return "Human";
  }
  if (choice === "paper" && result === "rock") {
    console.log("Human win");
    return "Human";
  } else if (choice === "paper" && result === "paper") {
    console.log("It's a tie");
    return "It's a tie";
  } else if (choice === "paper" && result === "scissors") {
    console.log("Computer wins");
    return "Computer";
  }
  if (choice === "scissors" && result === "rock") {
    console.log("Computer wins");
    return "Computer";
  } else if (choice === "scissors" && result === "paper") {
    console.log("Human win");
    return "Human";
  } else if (choice === "scissors" && result === "scissors") {
    console.log("It's a tie");
    return "It's a tie";
  }
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);

    if (result === "Human") {
      humanScore++;
    } else if (result === "Computer") {
      computerScore++;
    } else if (result === "It's a tie") {
      tieScore++;
    }

    console.log(`Round ${i + 1}:`);
    console.log(
      `Human: ${humanScore}, Computer: ${computerScore}, Ties: ${tieScore}`
    );
  }

  console.log("Game over!");
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
}
playGame();
