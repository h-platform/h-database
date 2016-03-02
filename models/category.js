var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({ 
  tableName: 'category'
}, {
  schema: [
    Fields.StringField('category_name'),
    Fields.StringField('category_path')
  ]
});