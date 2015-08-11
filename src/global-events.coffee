angular.module('TM_App')
       .run ($rootScope)->

          # hook keyboard events and broadcast them to the app
          body = angular.element(document.body)
          body.on 'keydown', (event)->
            if event
              $rootScope.$broadcast 'keydown', event

          body.on 'keyup', (event)->
            if event
              $rootScope.$broadcast 'keyup', event
