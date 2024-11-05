// 1. Deposit some money
// 2. Determine number of line to bet on
// 3. Collect a bet amount
// 4. Split the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

// Permet de demander une valeur à l'utilisateur
const prompt = require("prompt-sync")();

// Step 1
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

// Step 2

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("On how many lines you want to bet ? (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again !");
    } else {
      console.log(`You bet on ${numberOfLines} lines`);
      return numberOfLines;
    }
  }
};

// Step 3

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter bet per line: ");
    const numberBet = parseFloat(bet);
    const maximumBet = balance / lines;

    if (isNaN(numberBet) || numberBet < 0 || numberBet > balance / lines) {
      console.log(`Enter a valid bet ammount, try again ! (you can only bet ${maximumBet}$ for ${lines} lines)`);
    } else {
      console.log(`You bet ${numberBet}$, good luck !`);
      return numberBet;
    }
  }
};

// Function call, the function has to be above this:
let balance = deposit();
const lines = getNumberOfLines();
// Call balance parameter in this function
const bet = getBet(balance, lines);
