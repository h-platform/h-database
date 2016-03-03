var u = require('../utils');
var l = require('../logger');
var _ = require('lodash');

var config = require('config');
var db_config = config.get('knex');
l.info("Database Server Configuration:", db_config);
var knex = require('knex')(db_config);

var count = 400;
var records = [];
var record;

var ipsums = [
  'Id agam zril soluta has, cu cum dissentias sadipscing disputando. Sea laudem lucilius consulatu ea, habeo equidem explicari mel te.',
  'Dolorum eleifend id cum. Vel et duis democritum, vis autem summo constituam te, wisi integre has ea.',
  'Eu magna principes urbanitas has. Mea id adipisci accusamus. Ut his albucius splendide assentior.',
  'Copiosae consequuntur mel cu, essent reformidans mea eu, probo falli prodesset per ad.',
  'Cu omnium platonem complectitur duo, ei nostro lucilius vituperatoribus mel, te usu lorem falli albucius. ',
  'Cum eu hinc iracundia reprehendunt, veri nostrud no per. Adhuc ullum utroque an mel. No eum facilisis cotidieque.',
  'Vim inimicus iudicabit id, ea qui eius ornatus invenire. ',
  'Te vis alii inciderint, dolore adversarium ex usu, vix ad veritus detracto.',
  'Ut mea accusam eloquentiam, vim saepe gubergren ne. His ferri omnium commodo in, volutpat democritum est eu.'
];

for(i = 0 ; i < count ; i++){
  record = { 
    post_id: u.getRandomInt(1,100),
    body: u.getRandomElement(ipsums),
    created_by: u.getRandomInt(1,5),
  };

  records.push(record);
}

knex.insert(records, 'id').into('comment').then(function(insertedRecords) {
  console.log(insertedRecords);
  return 0;
}).catch(function(err) {
  console.log(err);
  return 1;
});