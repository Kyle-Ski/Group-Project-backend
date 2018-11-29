
exports.up = function(knex, Promise) {
    return knex.schema.createTable('night_life', function (table) {
        table.increments()
        table.string('type')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('night_life')
};
