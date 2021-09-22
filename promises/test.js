const fs = require("fs");
// const add = (num1, num2 = 0) => {
//   console.log(num1, num2);
// };

// add(9, 5);

//Example of reduce function
const numbers = [1, 2, 3, 4];
console.log(
  numbers.reduce((prevValue, currentValue) => {
    console.log(prevValue, currentValue);

    return prevValue + currentValue;
  }, 0)
);

// Same as .join("")
const joinWords = (wordsArray) => {
  return wordsArray.reduce((prev, cur) => {
    return prev + cur;
  }, "");
};

// add function with using rest operator
const add = (...rest) => {
  return rest.reduce((a, b) => a + b, 0);
};

// Example
// const add = (num1, num2, num3) => {
//   return num1 + num2 + num3;
// };
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

//Test of join words array function
// console.log(joinWords(["test", "test2", " another string"]));

// console.log(Math.pow(2, 2));

const writeFile = (filePath, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

writeFile("./testFile2.txt", "test file").then(console.log);
