exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        {
          name: 'Samwise Gamgee',
          bio: 'Gardener and poet. Married to Rose Cotton',
        },
        {
          name: 'Frodo Baggins',
          bio: 'The ring bearer',
        },
        {
          name: 'Donald Trump',
          bio: 'The 45th POTUS',
        },
        {
          name: 'Barack Obama',
          bio: 'The 44th POTUS',
        },
        {
          name: 'George W. Bush',
          bio: 'The 43rd POTUS',
        },
      ]);
    });
};
