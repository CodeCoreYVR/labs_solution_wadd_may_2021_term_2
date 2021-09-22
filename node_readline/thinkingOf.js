// First we have to import readline module
const readline = require("readline");
const { generateRandomNumber } = require("../utils/randomNumberUtils");

// Then we have to create rl interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Let's generate random number from 1 to 10
const randomNumber = generateRandomNumber(1, 10);
// Boolean that indicates if we guessed the number or not
let guessed = false;
// Int with number of used attempts
let attempts = 0;

// Setting the initial prompt
rl.setPrompt(" I'm thinking of a number between 1 and 10\n> ");
// Prompting user
rl.prompt();

// Adding listener to line event
rl.on("line", (input) => {
  // Removing whitespaces from input
  input = input.trim();
  // Checking if number is our random number
  // If we use just == we are not checking type
  // so even if our random number is int
  // and input is string checking will return true
  if (input == randomNumber) {
    // Increasing number of attempts
    attempts++;
    // Setting guessed to true
    guessed = true;
    // Closes app
    rl.close();
  } else {
    // Increasing number of attempts
    attempts++;
    // Console logging message for user
    console.log("Nope. Try again.");
    // Setting new prompt message
    rl.setPrompt("> ");
    // Prompting user
    rl.prompt();
  }
});

// Adding new event listener for close event
rl.on("close", () => {
  // Checking if user guessed the number
  if (guessed)
    // Logging final message
    console.log(`Guessed "${randomNumber}" correctly in ${attempts} attempts!`);
});
