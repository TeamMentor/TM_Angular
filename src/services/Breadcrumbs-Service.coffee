class Breadcrumbs_Service

  @$inject:['$rootScope']

  constructor: (@rootScope)->
    @.history      = {}
    @.current_Path = ''
    @.now = new Date().getMilliseconds()

  add_Breadcrumb: (id, title)=>
    if id and title
      if @.current_Path.indexOf(id) is -1
        @.current_Path += "/#{id}"
        @.history[id] =
          title     : title
          query_Id  : id
        return true
      #else
      #  console.log 'breadcrumb was already there'
    return false

  add_Breadcrumbs: (breadcrumbs)=>
    for breadcrumb in breadcrumbs
      @.add_Breadcrumb breadcrumb.id, breadcrumb.title

  clear_query: ()=>
    @.current_Path = ''

  current_Breadcrumbs: ()=>
    breadcrumbs = []
    path = ''
    for key in @.current_Path.split('/') when key
      item = @.history[key]
      if item
        breadcrumbs.push {
          query_Id     : item.query_Id
          title        : item.title
          path         : path
        }
        path += "/#{key}"
    return breadcrumbs

  move_Back: ()=>
    path = @.current_Path.split('/')
    path.pop()
    @.current_Path = path.join('/')

  on_Selected: (breadcrumb)=>
    if breadcrumb?.query_Id
      @.current_Path = breadcrumb.path
      @.rootScope.$broadcast 'apply_query', breadcrumb.query_Id
      if breadcrumb.query_Id?.contains 'search-'
        @.rootScope.$broadcast 'update_search', breadcrumb.title




angular.module('TM_App').service 'breadcrumbs_Service', Breadcrumbs_Service