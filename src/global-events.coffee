angular.module('TM_App')
       .run ($rootScope, tm_angular_config)->

          # hook keyboard events and broadcast them to the app
          body = angular.element(document.body)
          body.on 'keydown', (event)->
            if event
              $rootScope.$broadcast 'keydown', event

          body.on 'keyup', (event)->
            if event
              $rootScope.$broadcast 'keyup', event

          if tm_angular_config.log_Events
            log_Event = (name)->
              $rootScope.$on name, (params...)->
                console.log { event: name ,  time: (new Date()).getMilliseconds(), params: params}

            events = [ 'apply_filter', 'apply_query'
                       'clear_articles', 'clear_filter', 'clear_query', 'clear_search', 'set_search', 'update_search'
                       #'keydown', 'keyup'
                       'query_data', 'article_data', 'filter_data'
                       #'http_start', 'http_end'
                       'set_page', 'set_page_split'
                       'toggle_filters',
                       'view_filters', 'view_model_data'
                       'test']

            log_Event(name) for name in  events

angular.module('TM_App')
       .factory 'httpInterceptor',  ($q, tm_angular_config)->
            request: (config)->
              if config and tm_angular_config.log_Urls
                console.log "#{config.method} #{config.url}"
              $q.when(config);

       .config  ($httpProvider)->
          $httpProvider.interceptors.push('httpInterceptor');

       .run ($http, $rootScope) ->
          spinnerFunction_Start = (data) ->
            $rootScope.$broadcast 'http_start'
            data
          spinnerFunction_End = (data) ->
            $rootScope.$broadcast 'http_end'
            data

          $http.defaults.transformRequest.push spinnerFunction_Start
          $http.defaults.transformResponse.push spinnerFunction_End