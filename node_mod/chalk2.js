const chalk = require("chalk");

console.log(chalk.blue("hello world"));

console.log(chalk.red.bgBlue("hello world"));

console.log(chalk.green.bgRed.bold("hello world"));

console.log(chalk.yellow.bgBlack.bold.underline("hello world"));

console.log(chalk.yellow.bgBlack.bold.underline.italic("hello world"));

const colour = "red";
console.log(chalk[colour]["bgBlue"]("this is red"));
console.log(chalk.red.bgBlue("this is red"));

const user = {
  name: "Ondrej",
};
console.log(user.name);
console.log(user["name"]);
