var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');
var models = require('../models');

module.exports = bookshelf.Model.extend({ 
  tableName: 'post',
  
  initialize: function(attributes, options) {
    this.on('saving', this.beforeSave);
  },

  beforeSave: function(model, attrs, options){
    //do some actions before saving the model
  },

  category: function() {
    return this.belongsTo(models.category);
  },

  queue: function() {
    return this.belongsTo(models.queue);
  },

  status: function() {
    return this.belongsTo(models.status);
  },

}, {
  schema: [
    Fields.IntField('category_id', {required: true}),
    Fields.IntField('queue_id', {required: true}),
    Fields.IntField('status_id', {required: true}),

    Fields.StringField('title'),
    Fields.StringField('body'),
    
    Fields.IntField('created_by'),
    Fields.IntField('updated_by'),

    Fields.IntField('flag'),
  ],
  fields: ['id', 'category_id', 'queue_id', 'status_id', 'title', 'body', 'created_by', 'updated_by', 'flag'],
});