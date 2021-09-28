// Importing chalk module
const chalk = require("chalk");

// getting color from argv
let color = process.argv[2];

// formatting to correct function name
// bgBlue
// bgRed
const bgColor = "bg" + color[0].toUpperCase() + color.slice(1);

// Getting width from argv
const width = process.argv[3];

// Getting height from argv
const height = process.argv[4];

// Creating loop for specific amount of rows
for (let row = 1; row <= height; row++) {
  // Creating empty string for current row
  let rowText = "";
  // Creating loop for current rows columns
  for (let column = 1; column <= width; column++) {
    // Checking if column + row is even and based on that adding coloured background or white
    if ((column + row) % 2) rowText += chalk[bgColor](" ");
    else rowText += " ";
  }
  // Console logging current rows text
  console.log(rowText);
}
