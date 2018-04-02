"use strict";

function computerPlay() {
  const choiceNumber = Math.floor(Math.random() * 3);

  switch (choiceNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors" ||
      playerSelection === "paper" && computerSelection === "rock" ||
      playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`You win, for ${playerSelection} beats ${computerSelection}.`);
    return "win";
  } else if (computerSelection === "rock" && playerSelection === "scissors" ||
             computerSelection === "paper" && playerSelection === "rock" ||
             computerSelection === "scissors" && playerSelection === "paper") {
    console.log(`You lose, for ${computerSelection} beats ${playerSelection}.`);
    return "lose";
  } else {
    console.log(`It's a tie, for you both chose ${playerSelection}.`);
    return "tie";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log("");
    console.log(`ROUND ${i + 1}`);

    let playerSelection = prompt("Rock, paper, or scissors? Type your choice.");
    playerSelection = playerSelection.toLowerCase();

    while (!(playerSelection === "rock" || playerSelection === "paper" ||
             playerSelection === "scissors")) {
      playerSelection = prompt("Rock, paper, or scissors? Type your choice.");
      playerSelection = playerSelection.toLowerCase();
    }

    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === "win") {
      playerScore++;
    } else if (roundResult === "lose") {
      computerScore++;
    }

    console.log(`You: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("");
    console.log("CONGRATULATIONS! YOU WON.");
  } else if (computerScore > playerScore) {
    console.log("");
    console.log("SORRY! YOU LOST.");
  } else {
    console.log("WOW! IT'S A DRAW.");
  }

  console.log("");
  console.log("Type \"game();\" (without quotes) to play again.");
}