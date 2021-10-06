const knex = require("../db/client");

const main = async () => {
  try {
    const query1 = await knex.select("*").from("users").where("id", 1).toSQL();
    const query2 = await knex
      .select("*")
      .from("users")
      .limit(5)
      .offset(10)
      .toSQL();

    const query3 = await knex("posts")
      .insert({
        title: "🤔",
      })
      .toSQL();

    const query4 = await knex("posts")
      .insert([
        { content: "🍎", title: "🍌" },
        { content: "✏️", title: "📄" },
        { content: "🖱", title: "⌨️" },
      ])
      .toSQL();

    console.log(query1);
    console.log(query2);
    console.log(query3);
    console.log(query4);
  } catch (error) {
    console.error(error);
    knex.destroy();
  }
};
main().catch(console.error);
