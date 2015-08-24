app     = angular.module('TM_App')

class TM_API
  constructor: (q, http,timeout)->
    #console.log 'in TM_API CTOR'
    @.$q               = q
    @.$http            = http
    @.$timeout         = timeout
    @.cache_Articles           = {}
    @.cache_Query_Tree         = {}
    @.cache_Query_Tree_Queries = {}


  get_Words: (term, callback)=>
    url = "/angular/api/auto-complete?term=#{term}"
    return @.$http.get url
                .success (data)->
                   callback (match for match of data) if callback     # when using callback
                .then (response)->
                   return (match for match of response.data)          # when using promises

  query_view_model:  (id, filters, from, to, callback)=>
    if filters
      url     = "/api/data/query_view_model_filtered/#{id}/#{filters}/#{from}/#{to}"
    else
      url     = "/api/data/query_view_model/#{id}/#{from}/#{to}"
    @.$http.get url
           .success (data)=>
              callback(data)

  query_from_text_search: (text, callback)=>
    url     = "/api/search/query_from_text_search/#{text}"
    @.$http.get url
         .success (data)->
            callback(data)

  get_articles_parent_queries: (article_Ids, ignore_Titles, callback)=>
    url     = "/api/data/articles_parent_queries/#{article_Ids.join(',')}"
    @.$http.get url
         .success (data)->
           matches = []
           for key,query of data.queries
             if key.indexOf('query-') > -1
               query_Data = data.queries[key]
               #if query_Data.child_Queries.size() is 0
               #if query_Data.parent_Queries.size() is 1
               if query_Data.parent_Queries?.first() is 'query-6234f2d47eb7'
                 if ignore_Titles.indexOf(query_Data.title) is -1
                   matches.push { id: key,  title: query_Data.title, articles: query_Data.articles , size: query_Data.articles.size()}
           callback(matches) if callback

  docs_Library:  (callback)=>
    url     = "/json/docs/library"
    @.$http.get url
         .success (data)->
            callback(data)

  docs_Page:  (article_Id, callback)=>
    url = "/json/docs/#{article_Id}"
    @.$http.get(url).success callback

  article:  (article_Id, callback)=>
    if @.cache_Articles[article_Id]
      @.$timeout => callback @.cache_Articles[article_Id]
    else
      url  = "/json/article/#{article_Id}"
      @.$http.get(url).success (data)=>
        @.cache_Articles[article_Id]= data
        callback(data)

  recent_Articles:  (callback)=>
    url = "/json/recentarticles"
    @.$http.get(url).success callback

  top_Articles:  (callback)=>
    url = "/json/toparticles"
    @.$http.get(url).success callback

  login:  (username, password, callback)=>
    url      = "/json/user/login"
    postData = { username: username, password: password}
    @.$http.post(url, postData).success callback

  logout:()=>
    url ="/json/user/login"
    postData = {}
    @.$http.post(url,postData).success callback

  signup: (username, password,confirmpassword,email,firstname,lastname,company,title,country,state, callback)=>
    url      = "/json/user/signup"
    postData =  { username: username , password: password,'confirm-password':confirmpassword , email: email,firstname:firstname, lastname:lastname,company:company,title:title,country:country,state:state}
    @.$http.post(url, postData).success callback
    #@

  currentuser :(callback) =>
    url      = "/json/user/currentuser"
    @.$http.get(url).success (data)=>
      callback(data)

  pwd_reset: (email, callback)=>
    url      = "/json/user/pwd_reset"
    postData = { email:email }
    @.$http.post(url, postData).success callback

  popular_Search : (callback)=>
    url             = "/json/search/recentsearch"
    @.$http.get(url)
    .success (data)=>
      callback(data)


app.service 'TM_API', ($q, $http, $timeout)=>
  return new TM_API($q, $http, $timeout)


