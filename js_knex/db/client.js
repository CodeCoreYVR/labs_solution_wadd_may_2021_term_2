const configuration = require("../knexfile");
const client = require("knex")(configuration.development);

module.exports = client;
