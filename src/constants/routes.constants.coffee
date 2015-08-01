app = angular.module('TM_App')

routes_Names =
  components:
    a: {}
  views:
    guest     : ['about', 'blank', 'docs', 'features', 'pwd_forgot', 'home', 'login', 'sign_up' ]
    user_Root : ['navigate', 'main']
    user_User : ['index', 'articles']

app.constant('routes_Names',routes_Names)