var models = require('./models');
var path = require('path');
global.appRoot = path.resolve(__dirname);
var seneca = require('seneca')()
                .use('h-database-controllers')
                .listen();


