exports.seed = function(knex, Promise) {
  return Promise.join(
    // Inserts seed entries
    knex('queue').del(), 
    knex('queue').insert({queue_name: 'Sales', queue_path: '1.1'}),
    knex('queue').insert({queue_name: 'Customer Care', queue_path: '1.2'}),
    knex('queue').insert({queue_name: 'Development', queue_path: '1.3'}),

    // Inserts seed entries
    knex('category').del(), 
    knex('category').insert({category_name: 'ticket', category_path: '1.1'}),
    knex('category').insert({category_name: 'inquery', category_path: '1.2'}),

    // Inserts seed entries
    knex('status').del(), 
    knex('status').insert({status_name: 'open'}),
    knex('status').insert({status_name: 'closed'})
  );
};
