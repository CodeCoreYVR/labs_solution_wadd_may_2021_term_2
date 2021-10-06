const knex = require("../db/client");
const main = async () => {
  try {
    // Find all countries whose names begin with "b" ignoring case.
    const countriesBeginningWithB = await knex
      .select("*")
      .from("countries")
      .where("name", "ilike", "b%");

    // Count how many countries have "central" in their name.
    const centralCount = await knex
      .count("*")
      .from("countries")
      .where("name", "ilike", "%central%");

    // Find all countries whose names begin with the same three letters as their code ignoring case.
    const codeCountries = await knex
      .select("*")
      .from("countries")
      .whereRaw("name ilike CONCAT(countries.code, '%')");

    console.log(countriesBeginningWithB);
    console.log(centralCount);
    console.log(codeCountries);
  } catch (error) {
    console.error(error);
  } finally {
    knex.destroy();
  }
};

main().catch(console.error);
