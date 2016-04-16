var _ = require('lodash');
var bookshelf = require('../bookshelf');
var Models = require('../models');

module.exports = function(config){
  return {
    pattern: { role: config.role, model: config.model, cmd:'queryRecords' }, 
    action: function (args, callback) {

      var collection = Models[config.model].collection();
      
      collection.query(function(qb){
        // limit
        if(args.limit === 0){
          //do nothing
        } else if(args.limit > 0){
          qb.limit(args.limit);
        } else if (config.limit) {
          qb.limit(config.limit);
        }
        
        //select columns
        if (config.select_query_keys) {
          qb.select(config.select_query_keys);
        } else if (config.select_keys) {
          qb.select(config.select_keys);
        }

        //order by clause
        if (config.orderBy) {
          qb.orderBy(config.orderBy);
        }

        //where clause
        if(_.isArray(args.where)){
          _.each(args.where, function(clause){
            qb.where(clause.col, clause.op , clause.val);
          });
        }

        if(_.isFunction(config.queryRecords)) {
          config.queryRecords(qb, args);
        }
        
      });

      collection.fetch({withRelated: config.relations}).then(function(records) {
        callback(null, { records: records});
      }).catch(function(error){
        callback(error, null);
      });

    }
  };
};
