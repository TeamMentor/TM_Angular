angular.module('TM_App')
       .controller 'Pagination_Controller', ($scope, $rootScope)->


          model =
              page       : 1
              page_Split : 10
              data_Size  : 0
              pages      : []
              page_Splits: [4, 10,20,50,100]


          $scope.query_Id  =  null
          $scope.model     = model
          $scope.visible   = false

          $scope.set_Paging_Message = ()->
            recordsPerPage = model.page_Split
            totalRecords   = model.data_Size
            currentPage    = model.page

            if (currentPage==1 && recordsPerPage > totalRecords )
              $rootScope.pagginMessage = "Showing " + totalRecords + " articles"
              return;

            if currentPage == 1
              $rootScope.pagginMessage = "Showing articles 1 to " + recordsPerPage + " out of " + totalRecords
            else
              startNo = (((currentPage - 1) * (recordsPerPage))  + 1 );
              if ((currentPage  * recordsPerPage) + 1 > totalRecords)
                endNo =totalRecords
                $rootScope.pagginMessage = "Showing " + totalRecords + " articles";
                return
              else
                endNo =(currentPage * recordsPerPage) + 1 ;

              $rootScope.pagginMessage = "Showing articles  " + startNo + " to " + endNo + " out of " + totalRecords

          $scope.$on 'view_model_data', (event, data)->
            $scope.visible = true
            if not (data?.size)
              model.pages = null
            else
              model.data_Size = data?.size
              $scope.query_Id = data.id
              if data.size < model.page_Split
                split = 1
              else
                split = ~~(data.size / model.page_Split)

                if (data.size %% model.page_Split) > 0
                  split++
              model.pages =  [1.. split]
              $scope.set_Paging_Message()

          $scope.set_Page = ()->
            if model.page
              from    = (model.page - 1) * model.page_Split
              to      = (model.page    ) * model.page_Split
              $rootScope.$broadcast 'set_page', model.page, from, to
            $scope.set_Paging_Message

          $scope.set_Page_Split = (recordsPerPage)->
            angular.element(document.querySelector('#current_Page select'))[0].value="number:1"
            angular.element(document.querySelector('#current_Page select'))[0].text="1"
            if recordsPerPage
              model.page_Split = recordsPerPage
            $scope.set_Page()
            $rootScope.$broadcast 'set_page_split', model.page_Split

          $scope.previous_Page = ()->
            if model.page > 1
              model.page--
              $scope.set_Page()

          $scope.next_Page = ()->
            if model.page < model.pages.size()
              model.page++
              $scope.set_Page()


          #$scope.reset = ()->
          #  model.page       = 1
          #  model.page_Split = 10
          #  #$rootScope.$broadcast 'set_page', model.page
          #  #$rootScope.$broadcast 'set_page_split', model.page_Split



          $scope.$on 'keyup', (event, data)->
            if data.keyIdentifier is 'Left'
              $scope.previous_Page()
            if data.keyIdentifier is 'Right'
              $scope.next_Page()

          $scope.goToTop = () ->
              div = document.querySelector('.scrolling-results')
              if angular.element(div)[0]
                angular.element(div)[0].scrollTop=0

          $scope.ShowTopButton =  ->
            div = document.querySelector('.scrolling-results')
            if angular.element(div)[0]
              return angular.element(div)[0].scrollHeight > angular.element(div)[0].clientHeight
            else
              return false
