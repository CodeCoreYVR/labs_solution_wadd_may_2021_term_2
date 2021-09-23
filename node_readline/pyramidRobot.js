//importing readline module
const readline = require("readline");

//importing fs promises module
const fs = require("fs/promises");

//creating new interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// indication if file with pyramid was created
let pyramidFileCreated = false;
// indication of current action
let action = "hight"; // hight || fileName
// file name
let fileName = "";
// height of our pyramid
let height = null;

// Function for asking questions
const askQuestion = () => {
  // if action is hight ask this question
  if (action === "hight") rl.setPrompt("How tall is the pyramid?\n");
  // else ask this question
  else rl.setPrompt("Where do you want to write this pyramid?\n");
  rl.prompt();
};

// Function for generating pyramid code
const generatePyramid = (rows) => {
  // out output text
  let pyramid = "";
  // string for row
  var a = "";
  // number of rows
  var n = rows;
  // current row
  var m = n - 1;
  for (i = 1; i <= n; i++) {
    // trims row
    a = a.trim();
    // calculates needed space for and adds asterisks
    a = " ".repeat(m) + a + (i > 1 ? " " : "") + "*";
    // adds row to our pyramid text
    // it this is not lost row adds line break at the end as well
    pyramid += a + (i === n ? "" : "\n");
    // decrease row number
    m--;
  }
  return pyramid;
};

// Sets the initial question
askQuestion();

rl.on("line", (input) => {
  // trims whitespaces
  input = input.trim();
  // Check for current action
  if (action === "hight") {
    // checks if input is number
    if (isNaN(parseInt(input))) {
      console.log("Invalid input!");
      askQuestion();
    } else {
      // sets value for height and changes action
      height = parseInt(input);
      action = "fileName";
      askQuestion();
    }
  } else if (action === "fileName") {
    // sets file name
    fileName = input;
    // generates pyramid
    const pyramid = generatePyramid(height);
    // writes file
    fs.writeFile(fileName, pyramid).then(() => {
      pyramidFileCreated = true;
      rl.close();
    });
  }
});

// event which will be triggered once we close our app
rl.on("close", () => {
  // Checks if file was created
  if (pyramidFileCreated)
    console.log(`Successfully wrote pyramid to ${fileName} to disk.`);
});
