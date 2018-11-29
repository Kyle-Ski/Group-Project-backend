
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "indoor"; ALTER SEQUENCE indoor_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      return knex('indoor').insert([
        {id: 1, type: 'Netflix'},
        {id: 2, type: 'Board Games'},
        {id: 3, type: 'Drinking Games'},
        {id: 4, type: 'Cooking'},
        {id: 5, type: 'Couples Coding'},
      ]);
    });
};
