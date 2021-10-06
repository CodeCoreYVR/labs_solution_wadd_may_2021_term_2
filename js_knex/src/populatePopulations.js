const knex = require("../db/client");
const countries = require("./listOfCountries");

const main = async () => {
  try {
    const countriesQuery = await knex.select("*").from("countries");

    await knex("populations").insert(
      countries.map((c) => {
        return {
          year: c.year,
          quantity: Math.floor(c.value),
          country_id: countriesQuery.find((y) => y.code === c.countryCode).id,
        };
      })
    );
    // console.log(countries);
  } catch (error) {
    console.error(error);
  } finally {
    knex.destroy();
  }
};

main().catch(console.error);
