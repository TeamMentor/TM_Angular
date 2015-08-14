describe '| check-graph-db-data ', ->
  beforeEach ->
    module 'TM_App'
  it 'Check graph_db_data service has expected data',->
    inject (graph_db_data)->
      graph_db_data.keys().assert_Is [ 'status',
                                       'query_tree_articles_query-6234f2d47eb7_0_10',
                                       'query_tree_articles_query-6234f2d47eb7_10_20',
                                       'query_tree_articles_query-6234f2d47eb7_20_30',
                                       'query_tree_filters_query-6234f2d47eb7',
                                       'query_tree_queries_query-6234f2d47eb7' ]
      graph_db_data['status'].assert_Is {status: 'ok'}

