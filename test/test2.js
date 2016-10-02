var bookshelf = require('../bookshelf');
var Models = require('../models');

var JsonApiQueryParser = require('jsonapi-query-parser');
var queryParser = new JsonApiQueryParser();
// var Mapper = require('jsonapi-mapper');
// var mapper = new Mapper.Bookshelf('https://hlab.dev/api');

var queryRecordsController = require('../lib/queryRecordsController')
var config = require('../pods/post/config');
var controller = queryRecordsController(config);
// console.log(controller);

const querystring = require('querystring');

function doExecute() {
    //reduce request.query and look for all keys matching the JSONAPI filter['(.*)'] and extract the column and map it to where clause
    // var url = '/post/?include=category,queue&fields[post]=id,title,body&page[offset]=2&sort=title';
    var url = 'http://192.168.33.10:3010/api/posts?filter[category_id]=1&filter[category_id]=2&filter[status_id]=2&filter[status_id]=1&filter[queue_id]=1&page=1&pageSize=25';
    var query = url.indexOf('?') >= 0 ? url.substring(url.indexOf('?')+1,url.length) : url;
    var queryComponents = querystring.parse(query)
    var filterClauses = _.filter(queryComponents, (key, value) => _.startsWith(key,'filter'));
    // _.reduce(request.query, function(where_clauses, value, key){
    //     if(matched = key.match(/filter\[([a-zA-Z_\.]+)\]/)){
    //         _.map(value, function(v, i){
    //         where_clauses.push({col:matched[1], op:'=', val:v});
    //     })
    // }
    // return where_clauses;
    // },[]);

    console.log(queryComponents);
    console.log(filterClauses);






    // // Returns a list of post
    // var collection = Models[config.model].collection();

    // var results = Models['post'].fetchPage({
    // // var results = collection.fetchPage({
    //     pageSize: 2,
    //     page: 5
    // })
    // .then(function(results){
    //   console.log('------------------>');
    //   console.log(results.toJSON());
    //   console.log('------------------>');
    //   console.log(results.length);
    // });





    // controller.action({ role: config.role, model: config.model, cmd:'queryRecords', pageSize: 3, page:4 }, function(err, results){
    //     console.log('------------------>');
    //     console.log(results);
    //     console.log('------------------>');
    //     console.log(results.records.length);
    //     console.log('------------------>');
    //     console.log(err);
    // })

}

setTimeout(doExecute, 1000);


