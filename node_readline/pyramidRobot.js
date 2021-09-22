//importing readline module
const readline = require("readline");

//creating new interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fileName = "";

rl.on("close", () => {
  console.log(`Successfully wrote pyramid to ${fileName} to disk.`);
});
