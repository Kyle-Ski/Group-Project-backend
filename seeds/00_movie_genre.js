
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "movie_genre"; ALTER SEQUENCE movie_genre_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      return knex('movie_genre').insert([
        {id: 1, type: 'Horror'},
        {id: 2, type: 'Comedy'},
        {id: 3, type: 'Sci-fi'},
        {id: 4, type: 'Romantic-Comedy'},
        {id: 5, type: 'Action'},
        {id: 6, type: 'Romantic'},
      ]);
    });
};
