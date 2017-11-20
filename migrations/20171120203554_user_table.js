
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').comment('primary key')
    table.string('username').unique().comment('username')
    table.string('password').comment('password')
    table.string('email').comment('email')
    table.string('profile_pic').comment('Profile picture')
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('users')  
};
