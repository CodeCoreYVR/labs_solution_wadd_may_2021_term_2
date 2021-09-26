// Using the faker library get the following outputs

// Faker documentation: http://marak.github.io/faker.js/index.html
const faker = require("faker");

// 1) a random country
console.log(faker.address.country());

// 2) a company name
console.log(faker.company.companyName());

// 3) a date in the past
console.log(faker.date.past());

// 4) a date between january 1st 2020 and december 31st 2020
console.log(faker.date.between("2020-01-01", "2020-12-31"));
