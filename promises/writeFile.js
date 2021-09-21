const fs = require("fs");

const writeFile = (path, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
writeFile("file.txt", "The contents of my file")
  .then(function () {
    console.log("File write complete!");
  })

  .catch(function (error) {
    console.error(error);
  });
