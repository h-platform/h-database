module.exports = {
  role: 'database',
  model: 'comment',
  limit: 50,
  relations: [
    // 'createdBy',
    { 'createdBy': function(qb) { qb.column('id', 'username'); } }
  ]
};