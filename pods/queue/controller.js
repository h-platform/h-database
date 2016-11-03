var bookshelf = require('../../bookshelf');
var Models = require('../../models');

module.exports = [{
  pattern: { role:'database', model: 'queue', cmd:'queryRecords', view: 'with_post_counts' }, 
  action: function (args, callback) {
    Models['queue']
    .collection()
    .query(function(qb){
      qb.select('*');
      qb.select(bookshelf.knex.raw("( \
        SELECT COUNT(post.id) \
        FROM post \
        WHERE post.queue_id = queue.id AND post.status_id <> 2  \
      ) as post_count"));
    })
    .fetch()
    .then(function(records) {
      callback(null, { records: records});
    });
  }
}];
