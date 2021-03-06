app     = angular.module('TM_App')

class TM_API
  constructor: (q, http,window,timeout,state)->
    #console.log 'in TM_API CTOR'
    @.$q                        = q
    @.$http                     = http
    @.$timeout                  = timeout
    @.$window                   = window
    @.cache_Articles            = {}
    @.cache_Guides              = null
    #@.cache_Query_Tree         = {}
    #@.cache_Query_Tree_Queries = {}
    @.cache_Query_View_Model    = {}
    @.currentUserCache          = null            # todo: this variable name really needs to be refactored since it just about clashes with the currentuser method
    @.config                    = null
    @.tmrecentArticles          = null
    @.topArticles               = null
    @.loginPage                 = '/angular/guest/login'
    @.errorPage                 = '/angular/user/error'


  get_Words: (term, callback)=>
    url = "/angular/api/auto-complete?term=#{term}"
    return @.$http.get url
                .success (data)->
                   callback (match for match of data) if callback     # when using callback
                .error (data, statusCode) =>
                  if statusCode == 403
                    @.$window.location.href = @.loginPage
                  else
                    @.$window.location.href = @.errorPage
                .then (response)->
                   return (match for match of response.data)          # when using promises

  query_view_model:  (id, filters, from, to, callback)=>
    if filters
      url     = "/api/data/query_view_model_filtered/#{id}/#{filters}/#{from}/#{to}"
    else
      url     = "/api/data/query_view_model/#{id}/#{from}/#{to}"
    if @.cache_Query_View_Model[url]
      callback @.cache_Query_View_Model[url]
    else
      @.$http.get url
             .success (data)=>
                @.cache_Query_View_Model[url] = data
                callback(data)
             .error (data, statusCode) =>
                if statusCode == 403
                  @.$window.location.href = @.loginPage
                else
                  @.$window.location.href = @.errorPage


  query_from_text_search: (text, callback)=>
    text    = text.replace('%','-')
    url     = "/api/search/query_from_text_search/#{text}"
    @.$http.get url
         .success (data)->
            callback(data)
         .error (data, statusCode) =>
           if statusCode == 403
             @.$window.location.href = @.loginPage
           else
            @.$window.location.href = @.errorPage

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
         .error (data, statusCode) =>
            if statusCode == 403
              @.$window.location.href = @.loginPage
            else
              @.$window.location.href = @.errorPage

  docs_Library:  (callback)=>
    url     = "/jade/json/docs/library"
    @.$http.get url
         .success (data)->
            callback(data)

  docs_Page:  (article_Id, callback)=>
    url = "/jade/json/docs/#{article_Id}"
    @.$http.get(url).success callback

  article:  (article_Id, callback)=>
    if @.cache_Articles[article_Id]
      @.$timeout => callback @.cache_Articles[article_Id]

    url  = "/jade/json/article/#{article_Id}"               # this will always be called (for logging purposes)
    @.$http.get(url)
           .success (data)=>
              if @.cache_Articles[article_Id]                       # but the returned data will only be used the first time
                return
              @.cache_Articles[article_Id]= data                    # ie. when the cache doesn't exist
              callback(data)
          .error (data, statusCode) =>
            if statusCode == 403
              @.$window.location.href = @.loginPage
            else
              @.$window.location.href = @.errorPage

  my_Articles:  (size, callback)=>
    url = "/jade/json/my-articles/#{size}"
    @.$http.get(url).success (data) =>
      callback data


  recent_Articles:  (size,callback)=>
    if @.tmrecentArticles
      callback @.tmrecentArticles
    else
      url = "/jade/json/recentarticles/#{size}"
      @.$http.get(url).success (data) =>
        @.tmrecentArticles = data
        callback data

  top_Articles:  (callback)=>
    if @.topArticles
      callback @.topArticles
    else
      url = "/jade/json/toparticles"
      @.$http.get(url).success (data) =>
        @.topArticles = data
        callback data

  login:  (username, password, callback)=>
    url      = "/json/user/login"
    postData = { username: username, password: password}
    @.$http.post(url, postData).success callback

  logout:(callback)=>
    url ="/json/user/logout"
    postData = {}
    @.$http.post(url,postData).success callback

  signup: (postData, callback)=>
    url      = "/json/user/signup"
    postData['confirm-password'] = postData.confirmpassword

    @.$http.post(url, angular.toJson(postData)).success callback
    #@

  #todo: this method name has a really close clash with the @.currentUser variable
  currentuser: (callback) =>
    url      = "/json/user/currentuser"
    if  @.currentUserCache? &&  @.currentUserCache.UserEnabled
      callback  @.currentUserCache
    else
      @.$http.get(url).success (data)=>
        if not data
          return callback null

        @.currentUserCache                   = data
        @.currentUserCache.InternalUser      = ''
        @.currentUserCache.InternalUserInfo  = {}

        @.verifyInternalUser data.Email, (internalUserInfo) =>
          if internalUserInfo?
            @.currentUserCache.InternalUser     = true
            @.currentUserCache.InternalUserInfo = internalUserInfo
          else
            @.currentUserCache.InternalUser     = false
          callback @.currentUserCache

  pwd_reset: (email, callback)=>
    url      = "/jade/json/user/pwd_reset"
    postData = { email:email }
    @.$http.post(url, postData).success callback



  pwd_reset_Token: (username,token,password, callback)=>
    url      = "/jade/json/passwordReset/"+ username+ "/"+ token
    postData = { password:password, 'confirm-password':password }
    @.$http.post(url, postData).success callback

  popular_Search : (callback)=>
    url             = "/jade/json/search/recentsearch"
    @.$http.get(url)
    .success (data)=>
      callback(data)

  gatewaysLibrary: (callback) =>
    if @.cache_Guides
      callback @.cache_Guides
    else
      url             = "/jade/json/gateways/library"
      @.$http.get(url)
      .success (data)=>
        callback(data)
      .error (data, statusCode) =>
        if statusCode == 403
          @.$window.location.href = @.loginPage
        else
          @.$window.location.href = @.errorPage

  tmConfig :(callback)=>
    url             = "/jade/json/tm/config"
    if @.config
      callback @.config
    else
      @.$http.get(url).success (data) =>
        @.config  = data
        callback(data)

  verifyInternalUser: (userEmail, callback)=>
    @tmConfig (configFile) =>
      allowedEmailDomains              = configFile?.allowedEmailDomains
      email                            = userEmail
      matchesEmail = false
      allowedEmailDomains?.some (domain)=>                  # note: this will fire twice if there are two matches
        if email?.match(domain.toString())
          return matchesEmail = true
      if matchesEmail
        return callback configFile
      else
        return callback null

app.service 'TM_API', ($q, $http,$window, $timeout)=>
  return new TM_API($q, $http,$window, $timeout)


