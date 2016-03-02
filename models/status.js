var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({ 
  tableName: 'status'
}, {
  schema: [
    Fields.StringField('status_name'),
    Fields.StringField('status_path')
  ]
});