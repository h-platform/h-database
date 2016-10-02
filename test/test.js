var bookshelf = require('../bookshelf');
var Models = require('../models');

var JsonApiQueryParserClass = require('jsonapi-query-parser');
var JsonApiQueryParser = new JsonApiQueryParserClass();

var Mapper = require('jsonapi-mapper');

// Create the mapper
var mapper = new Mapper.Bookshelf('https://hlab.dev/api');

function doExecute() {
    //%2C
    var url = '/post/?include=category,queue&fields[post]=id,title,body&page[offset]=2&sort=title';
    var requestData = JsonApiQueryParser.parseRequest(url);
    console.log(requestData);

    // Please see the API for more information
    // On available options
    const options = {
        fields: {
            post: ['title', 'body']
        },
        page: {
            limit: 10
        },
        sort: ['-title']
    };

    // Returns a list of post
    var results = Models['post']
        .fetchJsonApi(requestData.queryData)
        .then(function(result){
          var doc = mapper.map(result, 'post');
          console.log(doc);
          return result;
        });
}

setTimeout(doExecute, 1000);


