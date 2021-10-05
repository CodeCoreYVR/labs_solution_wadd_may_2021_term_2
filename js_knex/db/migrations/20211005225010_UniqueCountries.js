exports.up = function (knex) {
  return knex.schema.alterTable("countries", function (t) {
    t.unique("name");
    t.unique("code");
  });
};

exports.down = function (knex) {};
