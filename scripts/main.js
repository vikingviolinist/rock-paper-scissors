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
  playerSelection = playerSelection.toLowerCase();

  let playerWins = false;
  let computerWins = false;

  if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
    playerWins = true;
  } else if (computerSelection === "rock" && playerSelection === "scissors" ||
    computerSelection === "paper" && playerSelection === "rock" ||
    computerSelection === "scissors" && playerSelection === "paper") {
    computerWins = true;
  }

  if (playerWins === true) {
    return `You win, for ${playerSelection} beats ${computerSelection}.`;
  } else if (computerWins === true) {
    return `You lose, for ${computerSelection} beats ${playerSelection}.`;
  } else {
    return `It's a tie, for you both choose ${playerSelection}.`;
  }
}