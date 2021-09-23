// import of readline module
const readline = require("readline");

// creating interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Index of current question
let questionIndex = 0;
// user score
let score = 0;
// array of questions
const questions = [
  {
    question: "What is the name of Google's browser?",
    answer: "Chrome",
  },
  { question: "What is the name of Apple's browser?", answer: "Safari" },
  { question: "What is the name of Mozilla's browser?", answer: "Firefox" },
];

// Function which will set prompt and asks user
const askQuestion = () => {
  rl.setPrompt(questions[questionIndex].question + "\n");
  rl.prompt();
};

// Let's set initial prompt
askQuestion();

// Adding listener to line event
rl.on("line", (input) => {
  // trimming input
  input = input.trim();
  // Checking if answer was correct
  if (input === questions[questionIndex].answer) {
    // if yes we will increase score
    score++;
    // And console log success
    console.log("That's correct!");
  } else {
    // Else we will display error message with correct answer
    console.log(
      `${input} is incorrect. The answer was ${questions[questionIndex].answer}.`
    );
  }
  // We will increase question index
  questionIndex++;
  // And we will check if it there are more question
  // Else we will close app
  if (questionIndex > questions.length - 1) rl.close();
  else askQuestion();
});

// event listener for close event
rl.on("close", () => {
  // This will show user score
  console.log(`Final score ${score}/${questions.length}`);
});
