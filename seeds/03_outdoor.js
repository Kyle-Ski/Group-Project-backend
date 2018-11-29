
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "outdoor"; ALTER SEQUENCE outdoor_id_seq RESTART WITH 11;')
    .then(function () {
      // Inserts seed entries
      return knex('outdoor').insert([
        {id: 1, type: 'Hiking'},
        {id: 2, type: 'Bowling'},
        {id: 3, type: 'Swimming'},
        {id: 4, type: 'Mini Golf'},
        {id: 5, type: 'Rock Climbing'},
        {id: 6, type: 'Picnic'},
        {id: 7, type: 'Riding Bikes/Scooter'},
        {id: 8, type: 'Ski/Snowboarding'},
        {id: 9, type: 'Museum'},
        {id: 10, type: 'Dancing'},
      ]);
    });
};
