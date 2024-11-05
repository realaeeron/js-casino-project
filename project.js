// 1. Deposit some money
// 2. Determine number of line to bet on
// 3. Collect a bet amount
// 4. Split the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

// Permet de demander une valeur à l'utilisateur
const prompt = require("prompt-sync")();

// Étape 1
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit ammount : ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit ammount, try again !");
    } else {
      console.log(`${depositAmount}$ is correctly added to your balance`);
      return numberDepositAmount;
    }
  }
};

const depositAmount = deposit();

// Étape 2

const getNumberOfLines = () => {
  while (true) {
    const numberOfLines = prompt("On how many lines you want to bet ?: ");
    const lines = parseFloat(numberOfLines);

    if (isNaN(lines) || lines <= 0 || lines > 3) {
      console.log("Invalid number of lines, try again !");
    } else {
      console.log(`You bet on ${lines} lines`);
      return lines;
    }
  }
};

const numberOfLines = getNumberOfLines();
