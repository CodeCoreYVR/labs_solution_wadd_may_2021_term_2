const { rejects } = require("assert");
const fs = require("fs");

const readFile = (filePath) =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

const writeFile = (filePath, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

const readDir = (filePath, content) =>
  new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

readFile("./file.txt")
  .then((data) => writeFile("./newFile.txt", data))
  .then(() => readDir("./"))
  .then(console.log)
  .catch(console.error);
