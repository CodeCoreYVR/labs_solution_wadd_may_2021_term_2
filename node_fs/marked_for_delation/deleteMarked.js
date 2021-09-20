const fs = require("fs");
// Loads the file
fs.readFile("marked.csv", { encoding: "utf-8" }, (err, data) => {
  if (err) console.error(err);
  else {
    const newFileText = data
      // Split into rows
      .split("\n")
      // Checks if last value of row is no or yes
      // Also if index === 0 keeps the header
      .filter((row, index) => {
        return index === 0 || row.split(",")[2] === "no";
      })
      //Joins back the rows into single text
      .join("\n");

    //write filtered rows into new file
    fs.writeFile("deleted.csv", newFileText, (err) => {
      if (err) console.error(err);
    });
  }
});
