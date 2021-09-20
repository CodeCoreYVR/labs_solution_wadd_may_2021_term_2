const fs = require("fs");

fs.readFile("marked.csv", { encoding: "utf-8" }, (err, data) => {
  if (err) console.error(err);
  else {
    const newFileText = data
      .split("\n")
      .filter((row, index) => {
        return index === 0 || row.split(",")[2] === "no";
      })
      .join("\n");
    fs.writeFile("deleted.csv", newFileText, (err) => {
      if (err) console.error(err);
    });
  }
});
