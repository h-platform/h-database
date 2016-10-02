var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');
var models = require('../models');

var l = require('../logger');
var _ = require('lodash');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um.um_user',

  image: function() {
    return this.morphOne(models.image, 'imageable', ['entity_type_id','entity_id'], '9');
  }
}, {
  schema: [
    Fields.StringField('email'),
    Fields.StringField('username'),
    Fields.EncryptedStringField('password', {keylen: 1, saltLength: 1, iterations: 3}),
    Fields.StringField('facebook_id'),
    Fields.StringField('google_id'),
    Fields.BooleanField('email_activated'),
    Fields.BooleanField('facebook_activated'),
    Fields.BooleanField('google_activated')
  ],
});