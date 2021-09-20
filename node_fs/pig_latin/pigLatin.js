const fs = require("fs");
const vowels = require("./vowels");
const inputFile = process.argv[2];
const outputFile = process.argv[3];

const translateToPigLatin = (text) => {
  let words = text.split(" ");
  words = words.map((word) =>
    vowels.includes(word[0])
      ? translateWordWithVowel(word)
      : translateWordWithoutVowel(word)
  );
  return words.join(" ");
};

const translateWordWithVowel = (word) => {
  const ending = Math.round(Math.random()) ? "ay" : "way";
  const wordParts = word.split(".");
  wordParts[0] += ending;

  return wordParts.join(".");
};

const translateWordWithoutVowel = (word) => {
  const start = word[0];

  wordParts = word.split(".");
  wordParts[0] = wordParts[0].slice(1) + start + "ay";
  return wordParts.join(".");
};

fs.readFile(inputFile, { encoding: "utf-8" }, (err, data) => {
  if (err) console.error(err);
  else {
    const translatedText = translateToPigLatin(data);
    console.log(translatedText);
    fs.writeFile(outputFile, translatedText, (err) => {
      if (err) console.error(err);
    });
  }
});

console.log(`${inputFile} was translated to pig latin!`);

// console.log(inputFile, outputFile);
