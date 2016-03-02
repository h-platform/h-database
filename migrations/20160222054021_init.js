exports.up = function(knex, Promise) {
  return knex.schema.createTable('region', function(table) {
    table.increments('id').primary();
    table.string('queue_name');
    table.string('queue_path').unique();
  }).then(function() {
    return knex.schema.createTable('category', function(table) {
      table.increments('id').primary();
      table.string('category_name').unique();
      table.string('category_path').unique();
    });
  }).then(function() {
    return knex.schema.createTable('status', function(table) {
      table.increments('id').primary();
      table.string('status_name').unique();
    });
  }).then(function() {
    return knex.schema.createTable('post', function(table) {
      table.increments('id').primary();

      table.integer('queue_id').unsigned().references('queue.id');
      table.integer('category_id').unsigned().references('category.id');
      table.integer('status_id').unsigned().references('status.id');
      
      table.string('title');
      table.text('body');

      table.timestamps();

      table.integer('created_by').unsigned();
      table.integer('updated_by').unsigned();

      table.integer('flag');
    });
  }).then(function() {
    return knex.schema.createTable('comment', function(table) {
      table.increments('id').primary();
      table.integer('post_id').unsigned().references('post.id');
      table.text('body');
      table.integer('created_by').unsigned();
      table.integer('updated_by').unsigned();
      table.timestamps();
    });
  });
};

exports.down = function(knex, Promise) {
  
};