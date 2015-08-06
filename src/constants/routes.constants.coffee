app = angular.module('TM_App')

routes_Names =
  components:
    a: {}
  views:
    guest     : ['about', 'blank', 'features', 'pwd_forgot', 'home', 'login', 'sign_up']
    user_Root : ['navigate', 'main','docs' , 'terms_and_conditions' ]
    user_User : ['index', 'articles']

app.constant('routes_Names',routes_Names)