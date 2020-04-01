let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => Math.floor(Math.random()*10);
let compareGuesses = (humanGuess, computerGuess, target) => {
  if(Math.abs(target-humanGuess)<Math.abs(target-computerGuess)) {
    return true;
  } else {
    return false;
  }
}

let updateScore = (winner) => {
  if(winner === 'human') {
    humanScore++;
  } else if(winner === 'computer') {
    computerScore++;
  }
};

let advanceRound = () => currentRoundNumber++;
