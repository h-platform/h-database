var deleteRecordController = require('./deleteRecordController');
var getAllRecordsController = require('./getAllRecordsController');
var getRecordController = require('./getRecordController');
var queryRecordsController = require('./queryRecordsController');
var saveRecordController = require('./saveRecordController');

module.exports = function(config){
  return [
    deleteRecordController(config),
    getAllRecordsController(config),
    getRecordController(config),
    queryRecordsController(config),
    saveRecordController(config)
  ];
};
