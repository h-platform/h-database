var u = require('../utils');
var l = require('../logger');
var _ = require('lodash');

var config = require('config');
var db_config = config.get('knex');
l.info("Database Server Configuration:", db_config);
var knex = require('knex')(db_config);

var count = 100;
var records = [];
var record;

var ipsums = [
  'Lorem ipsum dolor sit amet, sea in dolorum expetendis necessitatibus, mea mazim docendi no. Laudem contentiones has cu. Id agam zril soluta has, cu cum dissentias sadipscing disputando. Sea laudem lucilius consulatu ea, habeo equidem explicari mel te.',
  'Ut soluta nostrum eum, nostro facilis definitionem mei ex, id eos amet assum. Ullum volumus te mea. Dolorum eleifend id cum. Vel et duis democritum, vis autem summo constituam te, wisi integre has ea. Reque sensibus no has, vix ne tation doctus cetero. Usu facer omnium expetendis ne, veritus efficiendi eum ei, mea autem alienum ex.',
  'Detracto placerat sed ei, eirmod consulatu ullamcorper cu duo. Vim quod idque commodo ea, in duo sint modus moderatius. Eu magna principes urbanitas has. Mea id adipisci accusamus. Ut his albucius splendide assentior.',
  'Fugit zril maluisset mea id, partem noster deterruisset sea te, ius viris soleat principes te. Copiosae consequuntur mel cu, essent reformidans mea eu, probo falli prodesset per ad. Cu omnium platonem complectitur duo, ei nostro lucilius vituperatoribus mel, te usu lorem falli albucius. Ut mea accusam eloquentiam, vim saepe gubergren ne. His ferri omnium commodo in, volutpat democritum est eu.',
  'Sumo inermis invenire mel id, cu nec moderatius voluptatibus. Cum eu hinc iracundia reprehendunt, veri nostrud no per. Adhuc ullum utroque an mel. No eum facilisis cotidieque. Vim inimicus iudicabit id, ea qui eius ornatus invenire. Te vis alii inciderint, dolore adversarium ex usu, vix ad veritus detracto.',
];

for(i = 0 ; i < count ; i++){
  record = { 
    category_id: u.getRandomInt(1,2),
    queue_id: u.getRandomInt(1,3),
    status_id: u.getRandomInt(1,2),

    title: 'Post Title No ' + i,
    body: u.getRandomElement(ipsums),

    created_by: u.getRandomInt(1,5),
    updated_by: u.getRandomInt(1,5),

    flag: 0
  };

  records.push(record);
}

knex.insert(records, 'id').into('post').then(function(insertedRecords) {
  console.log(insertedRecords);
  return 0;
}).catch(function(err) {
  console.log(err);
  return 1;
});