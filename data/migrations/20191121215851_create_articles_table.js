
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', articles => {
      articles.increments();
      articles.string('title', 250).notNullable();
      articles.string('summary', 1000).notNullable();
      articles.string('link', 1000);
      articles.string('image', 1000);
      articles.integer('user_id').notNullable().unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      articles.integer('category_id').notNullable().unsigned().references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
      articles.string('category_name', 250);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('articles');
};
