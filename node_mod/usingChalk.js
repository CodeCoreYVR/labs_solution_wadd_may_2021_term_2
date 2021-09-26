// Using the chalk library do the following:

//Chalk documentation https://github.com/chalk/chalk#readme

//Import chalk
const chalk = require("chalk");

// 1) print the words "hello world" in blue
console.log(chalk.blue("hello world"));

// 2) print the words "hello world" in red with a blue background
console.log(chalk.bgBlue.red("hello world"));

// 3) print the words "hello world" in green with a red background in bold
console.log(chalk.bgRed.green.bold("hello world"));

// 4) print the words "hello world" in yellow with a black background bold and underlined
console.log(chalk.bgBlack.yellow.bold.underline("hello world"));

// 5) print the words "hello world" in yellow with a black background bold underlined and italic
console.log(chalk.bgBlack.yellow.bold.underline.italic("hello world"));
