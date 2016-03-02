var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({ 
  tableName: 'queue'
}, {
  schema: [
    Fields.StringField('queue_name'),
    Fields.StringField('queue_path')
  ]
});