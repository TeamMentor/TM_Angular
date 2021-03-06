angular.module('TM_App')
       .controller 'Search_Bar_Controller', ($rootScope, $scope, $state, $location, $timeout, query_Service, $element, $document, TM_API)->
          using $scope, ->
            @.query_Id            = null
            @.selected_Technology = null
            @.previous_Filter_Id  = null
            @.technologies        = {}
            @.technologies_By_Id  = {}
            @.text                = ''
            @.searchPlaceholder   = "Search All of TEAM Mentor"
            @.index_States        = ['index', 'index_query_id', 'index_query_id_filters']
            @.mobile_Dropbox_Visible = false

          $scope.$on 'clear_search', ()->
            $scope.text = ''

          $scope.$on 'clear_filter', (event, filter_Id)->
            if filter_Id
              if $scope.technologies_By_Id[filter_Id]
                $scope.selected_Technology = $scope.technologies_By_Id['All']

            $scope.select_Technology()

          $scope.$on 'apply_filter', (event, filter_Id, filter_Title, metadata_Title)->
            if metadata_Title is 'Technology'
              if filter_Title isnt $scope.selected_Technology?.title
                $scope.selected_Technology =  $scope.technologies_By_Id[filter_Id]
                $scope.previous_Filter_Id = filter_Id
                $scope.select_Technology()

          $scope.$on 'apply_filters', (event, filters)->
            if not $scope.filters_By_Id
              console.log '$scope.filters_By_Id NOT READY'
              return
            if filters
              for filter_Id in filters.split(',')
                filter = $scope.filters_By_Id[filter_Id]
                if filter
                  $rootScope.$broadcast 'apply_filter', filter.id, filter.title, filter.metadata_Title, false

          $scope.$on 'set_search', (event, text)->
            $scope.text = text
            $scope.submit()

          $scope.$on 'update_search', (event, text)->
            $scope.text = text

          $scope.set_technologies_By_Id = ()->

            query_Service.index_Query_Filters (filters)->

              $scope.technologies       = [{ title: 'All Technologies', id: query_Service.index_Query }]
              $scope.technologies_By_Id = { 'All' : $scope.technologies[0]}
              $scope.filters_By_Id      = {}
              if filters
                for key,value of filters
                  for filter in value                                     # map filters_By_Id
                    filter.metadata_Title= key
                    $scope.filters_By_Id[filter.id] = filter
                  if key is 'Technology' and value.size                   # map technologies_By_Id and technologies
                    for filter in value
                      $scope.technologies.push(filter)
                      $scope.technologies_By_Id[filter.id] = filter

              $scope.selected_Technology = $scope.technologies[0]
              $scope.previous_Filter_Id  = $scope.technologies[0].id

          $scope.update_Placeholder_Text = ()->
            $scope.searchPlaceholder = "Search All of TEAM Mentor"
            if $scope.selected_Technology
              if $scope.selected_Technology.title isnt 'All Technologies'
                $scope.searchPlaceholder = "Search " + $scope.selected_Technology.title

          $scope.set_Style = ()->

            title_Length = $scope.selected_Technology?.title?.length
            multiplier   = 18

            if title_Length
              size =  if title_Length  <= 5 then 115 else title_Length * multiplier
              return { flex: size + 'px'}
            return { flex: '310px' }

          $scope.select_Technology = ()->
            $scope.update_Placeholder_Text()

          $scope.select_Technology_Mobile = (technology)->
            $scope.selected_Technology = technology
            $scope.mobile_Dropbox_Visible = false
            $scope.select_Technology()

          $scope.submit = ()->
            if not @.index_States.contains($state.current?.name)
              $state.go('index')
              $scope.previous_Filter_Id = null


            after_Timeout = ()->
              if $scope.text is ''
                $rootScope.$broadcast 'loading_query', null,null
                $scope.submit_Event $scope.selected_Technology.id, query_Service.index_Query
              else
                TM_API.query_from_text_search $scope.text, (query_Id)->
                  $scope.submit_Event $scope.selected_Technology.id, query_Id


            $timeout after_Timeout,250      # I really don't like doing timeouts like this,but the child directives in Index_Controller
                                            # are only wired after a couple ms of Index_Controller loading
                                            # which means that they would miss the apply_query and view_model_data events


          $scope.submit_Event = (technology_Id, query_Id)->
            if technology_Id isnt $scope.previous_Filter_Id
              $rootScope.$broadcast 'clear_filter',query_Id, 'Technology'
              if $scope.selected_Technology.title isnt 'All Technologies'
                $rootScope.$broadcast 'apply_filter', $scope.selected_Technology.id, $scope.selected_Technology.title , 'Technology', false

            $rootScope.$broadcast 'apply_query',query_Id

            $scope.previous_Filter_Id = technology_Id

          $scope.get_Words = (term)->
            $rootScope.$broadcast 'search_term', term, $scope.selected_Technology

          $scope.show_Mobile_Dropbox = ()->
            $scope.mobile_Dropbox_Visible
          $scope.toggle_Mobile_Dropbox = ()->
            $scope.mobile_Dropbox_Visible = not $scope.mobile_Dropbox_Visible

          $scope.set_technologies_By_Id()
          $scope.select_Technology()
