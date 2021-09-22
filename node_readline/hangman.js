// Importing readline module
const readline = require("readline");

/// creating rl interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Setting initial value for attempts
let attempts = 0;
// Word that user will guess
const word = "node";
// Word splitted into characters ["n","o","d","e"]
const characters = word.split("");
// Character wich user already guessed []
const guessedCharacters = [];
// Indication if user guessed the word
let guessed = false;

// Function for generating word for printing out in terminal
const generateWord = () => {
  // Initial value is empty string
  let currentWord = "";
  // then for each character in our word we will do loop
  characters.forEach((char) => {
    if (
      // We will check if user guessed that character already or not
      guessedCharacters.some(
        (guessedChar) => guessedChar.toLowerCase() === char.toLowerCase()
      )
    )
      //If yes we will display this character
      currentWord += ` ${char} `;
    // Else we will display just underscore
    else currentWord += " _ ";
  });
  // Then we will return the string which we generated
  return currentWord;
};

// Setting prompt for user
rl.setPrompt(generateWord() + "\n> ");
// Prompting user
rl.prompt();

//Adding listener for line event
rl.on("line", (input) => {
  // Removing whitespaces from input
  input = input.trim();
  // Checking if input is exactly one character
  if (input.length !== 1) {
    // If it's not exactly one character we will display error message
    console.log("Invalid input");
    // We will set prompt
    rl.setPrompt("> ");
    // And we will prompt the user
    rl.prompt();
  } else {
    // If input is valid we will increase number of attempts
    attempts++;
    //We will check if input is in word we are trying to guess
    if (characters.some((char) => char.toLowerCase() === input.toLowerCase())) {
      // If yes we will add user input into array of guessed characters
      guessedCharacters.push(input);
      // Displaying message for the user
      console.log(`There was an ${input}! ${generateWord()}`);
      // Checking if user won or not
      if (
        characters.every(
          (char) =>
            guessedCharacters.includes(char.toLowerCase()) ||
            guessedCharacters.includes(char.toUpperCase())
        )
      ) {
        // If user won we will set guessed to true and close app
        guessed = true;
        rl.close();
      } else {
        // Else game continues
        rl.setPrompt("> ");
        rl.prompt();
      }
    } else {
      // Checking how many attempts user has
      if (attempts < 7) {
        //If user attempts are less than 7 we will display message
        // than his input is not it the word
        console.log(`Sorry no ${input}. ${generateWord()}`);
        rl.setPrompt("> ");
        rl.prompt();
      } else {
        // Else we will close the app
        rl.close();
      }
    }
  }
});

// We will add listener for close method
rl.on("close", () => {
  // If guessed then user won
  if (guessed) {
    console.log(`Congrats the word was ${word}`);
  }
  // Else he failed
  else {
    console.log("Too bad, better luck next time.");
  }
});
