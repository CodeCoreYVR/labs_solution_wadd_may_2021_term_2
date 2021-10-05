const knex = require("../db/client");
const countries = require("./listOfCountries");

const main = async () => {
  try {
    const uniqueCountries = [];
    countries.forEach((c) => {
      if (!uniqueCountries.some((uc) => uc.code === c.countryCode))
        uniqueCountries.push({ name: c.countryName, code: c.countryCode });
    });
    await knex("countries").insert(uniqueCountries);
    // console.log(countries);
  } catch (error) {
    console.error(error);
  } finally {
    knex.destroy();
  }
};

main().catch(console.error);
