
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_choices', function (table) {
        table.increments()
        table.integer('user_id').references('user_profile.id').unsigned().onDelete('cascade')
        table.string('movie_choice1')
        table.string('food_choice1')
        table.string('indoor_choice1')
        table.string('outdoor_choice1')
        table.string('night_life_choice1')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_choices')
};
