var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');
var models = require('../models');

module.exports = bookshelf.Model.extend({ 
  tableName: 'comment',
  
  initialize: function(attributes, options) {
    this.on('saving', this.beforeSave);
  },

  beforeSave: function(model, attrs, options){
    //do some actions before saving the model
  },

  post: function() {
    return this.belongsTo(models.post);
  },
}, {
  schema: [
    Fields.IntField('post_id', {required: true}),
    Fields.StringField('body'),
    Fields.IntField('created_by')
  ]
});