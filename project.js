// 1. Deposit some money
// 2. Determine number of line to bet on
// 3. Collect a bet amount
// 4. Splin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

// Import and all libraries at the top of the program
const prompt = require("prompt-sync")();

// Global variable
const ROWS = 3;
const COLS = 3;

// SNAKE_CASE instead of camelCase
const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

// Step 1
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit ammount : ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (
      isNaN(numberDepositAmount) ||
      numberDepositAmount <= 0 ||
      !/^\d+(\.\d+)?$/.test(depositAmount)
    ) {
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

    if (
      isNaN(numberOfLines) ||
      numberOfLines <= 0 ||
      numberOfLines > 3 ||
      !/^\d+(\.\d+)?$/.test(lines)
    ) {
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

    if (
      isNaN(numberBet) ||
      numberBet < 0 ||
      numberBet > balance / lines ||
      !/^\d+(\.\d+)?$/.test(bet)
    ) {
      console.log(
        `Enter a valid bet ammount, try again ! (you can only bet ${maximumBet}$ for ${lines} lines)`
      );
    } else {
      console.log(`You bet ${numberBet}$, good luck !`);
      return numberBet;
    }
  }
};

// Step 4 -> Spin slot machine

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[]];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const reels = spin();
console.log(reels);
// Function call, the function has to be above this:
let balance = deposit();
const lines = getNumberOfLines();
// Call balance parameter in this function
const bet = getBet(balance, lines);
