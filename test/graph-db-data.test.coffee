describe '| check-graph-db-data ', ->
  beforeEach ->
    module 'TM_App'
  it 'Check graph_db_data service has expected data',->
    inject (graph_db_data)->
      graph_db_data.keys().assert_Is [ 'status',
                                       'query_view_model_query-6234f2d47eb7_0_10',
                                       'query_view_model_query-6234f2d47eb7_10_20',
                                       'query_view_model_query-6234f2d47eb7_20_30',
                                       'query_view_model_filtered_query-6234f2d47eb7_query-7d9a1b64c045_0_10',
                                       'query_view_model_filtered_query-6234f2d47eb7_query-7d9a1b64c045_10_20',
                                       'query_view_model_filtered_query-6234f2d47eb7_query-7d9a1b64c045_20_30' ]

      graph_db_data['status'].assert_Is {status: 'ok'}

