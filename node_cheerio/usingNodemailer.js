//Scrap the unordered list under "Nodemailer features" from this documentation and send it as the body of an email using nodemailer. You can use a temporary email account such as DeveloperMail for testing.
const axios = require("axios");
const cheerio = require("cheerio");
const nodemailer = require("nodemailer");

const main = async () => {
  // getting html from website
  const response = await axios.get("https://nodemailer.com/about/");

  // creates new instance of cheerio from our html
  const $ = cheerio.load(response.data);

  // get list with features after the element with id nodemailer-features
  let features = $("#nodemailer-features").next();

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "z-xjwuu3@developermail.com, z-xjwuu3@developermail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "please allow html", // plain text body
    html: features.html(), // html body with html from our element
  });

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

main().catch((err) => console.error);
