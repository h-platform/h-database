module.exports = {
  role: 'database',
  model: 'post',
  limit: 10,
  orderBy: ['title'],
  relations: ['status','queue','category'],
  save_keys: ['category_id', 'queue_id', 'status_id', 'title', 'body', 'created_by', 'updated_by', 'flag'],
  select_keys: ['id', 'category_id', 'queue_id', 'status_id', 'title', 'body', 'created_by', 'updated_by', 'flag'],
  select_record_keys: ['id', 'category_id', 'queue_id', 'status_id', 'title', 'body', 'created_by', 'updated_by', 'flag'],
  select_query_keys: ['id', 'category_id', 'queue_id', 'status_id', 'title', 'body', 'created_by', 'updated_by', 'flag']
};