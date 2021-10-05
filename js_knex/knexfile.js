// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "knex_labs",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
