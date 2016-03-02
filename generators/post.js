var u = require('../utils');
var l = require('../logger');
var _ = require('lodash');

var config = require('config');
var db_config = config.get('knex');
l.info("Database Server Configuration:", db_config);
var knex = require('knex')(db_config);

var count = 100;
var records = [];
var createdBy = u.getRandomInt(1,10);
var record;

for(i = 0 ; i < count ; i++){
  record = { 
    category_id: 1,
    region_id: u.getRandomInt(4,7),
    entity_type_id: 1,
    title: 'قطعة أرض',
    body: '',
    price: u.getRandomInt(80000,3000000),
    currency:  'جنيه',

    block_no: u.getRandomInt(20,120),
    plot_no: u.getRandomInt(1,99),
    plot_area: u.getRandomInt(200,800),
    area_unit: 'م.م.',

    agent_name: '',
    agent_phone: '',

    owner_name: '',
    owner_phone: '',

    notes: '',

    created_by: u.getRandomInt(1,5),
    updated_by: u.getRandomInt(1,5),

    flag: 0
  };

  record.price_per_area_unit = record.price / record.plot_area;
  records.push(record);

}

knex.insert(records, 'id').into('post').then(function(insertedRecords) {
  console.log(insertedRecords);
  return 0;
}).catch(function(err) {
  console.log(err);
  return 1;
});