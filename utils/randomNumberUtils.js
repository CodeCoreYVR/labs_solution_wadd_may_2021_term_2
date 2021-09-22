// This is function for generating random number between minimum and maximum
const generateRandomNumber = (minimum, maximum) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

module.exports.generateRandomNumber = generateRandomNumber;
