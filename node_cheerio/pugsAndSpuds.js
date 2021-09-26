const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs/promises");

const main = async () => {
  const response = await axios.get("https://en.wikipedia.org/wiki/Pug");

  const $ = cheerio.load(response.data);

  // creates empty string
  let fileText = "";
  // Adds h1 to our string with our team name
  fileText = "# Team name\n";

  // gets all h2 inside of element with id content
  let listOfH2 = $("#content h2");
  // loops over array of h2 elements
  listOfH2.each((index, element) => {
    // creates new instance of that element
    let h2 = $(element);
    // adds new line with h2 text
    fileText += `## ${h2.text()} \n`;
    // add new line with text from element after the h2 element
    fileText += `${h2.next().text()} \n`;
  });

  // gets all h3 inside of element with id content
  let listOfH3 = $("#content h3");
  // loops over array of h3 elements
  listOfH3.each((index, element) => {
    // creates new instance of h3 element
    let h3 = $(element);
    // add new line with h3 to our file text string
    fileText += `### ${h3.text()} \n`;
    // add new line with text from element after the h3 element
    fileText += `${h3.next().text()} \n`;
  });

  // writes result to our pugs.md file
  await fs.writeFile("pugs.md", fileText);
};
main().catch((err) => console.error(err));
