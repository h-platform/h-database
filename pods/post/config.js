module.exports = {
  role: 'database',
  model: 'post',
  pageSize: 10,
  orderBy: ['title'],
  relations: ['status','queue','category'],
  queryPagedRecordsController: {
    searchable_columns: ['title', 'body'],
  },
  saveRecordController :{
    columns: ['category_id', 'queue_id', 'status_id', 'title', 'body', 'created_by', 'updated_by', 'flag'],
  }
  // select_keys: ['id', 'category_id', 'queue_id', 'status_id', 'title', 'body', 'created_by', 'updated_by', 'flag'],
  // select_record_keys: ['id', 'category_id', 'queue_id', 'status_id', 'title', 'body', 'created_by', 'updated_by', 'flag'],
  // select_query_keys: ['id', 'category_id', 'queue_id', 'status_id', 'title', 'body', 'created_by', 'updated_by', 'flag']
};