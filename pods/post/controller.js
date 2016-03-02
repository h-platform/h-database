var bookshelf = require('../../bookshelf');
var Models = require('../../models');
var config = require('./config');

module.exports = [{
  pattern: { role:config.role, model: config.model, cmd:'getRecord', view: 'complete' }, 
  action: function (args, callback) {
    Models[config.model]
    .forge({id: args.id})
    .fetch({withRelated: ['entityType','region','category']})
    .then(function(record) {
      callback(null, { record: record});
    });
  }
}, {
  pattern: { role:config.role, model: config.model, cmd:'queryRecords', view: 'complete' }, //region_path
  action: function (args, callback) {
    Models[config.model]
    .collection()
    .query(function(qb){
      qb.join("region","post.region_id","=","region.id")
      .where("region.region_path", args.region_path);
    })
    .fetch({withRelated: ['entityType','region','category']})
    .then(function(records) {
      callback(null, { records: records});
    });
  }
}];
