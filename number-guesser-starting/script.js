let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
    if (userGuess === computerGuess) {
        return true;
    }
    else if (getAbsoluteDistance(userGuess, secretNumber) < getAbsoluteDistance(computerGuess, secretNumber)) {
        return true;
    }
    else {
        return false;
    }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    }
    else {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = (guessNumber, targetNumber) => Math.abs(guessNumber - targetNumber);

const alert = userGuess => {
    if (userGuess < 0 || userGuess > 9) {
        return false;
    }
    else {
        return true;
    }
};