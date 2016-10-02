var logger = require('./logger');
var config = require('config');
var db_config = config.get('knex');
logger.info("Database Server Configuration:", db_config);
var knex = require('knex')(db_config);
var bookshelf = require('bookshelf')(knex);
var schema = require('bookshelf-schema');
var jsonApiParams = require('bookshelf-jsonapi-params');
bookshelf.plugin('pagination');
bookshelf.plugin(schema({}));
bookshelf.plugin(jsonApiParams, {
    pagination: { limit: 25 }
});
module.exports = bookshelf;