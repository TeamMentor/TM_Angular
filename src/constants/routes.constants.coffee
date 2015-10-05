app = angular.module('TM_App')

routes_Names =
  components: {}
  views:
    # defined via dedicated state: '/user/article'
    guest     : ['about',  'features', 'home', 'login', 'pwd_forgot', 'sign_up']
    user_Root : ['docs' , 'terms_and_conditions']
    user_User : ['main','index', 'articles', 'error']

app.constant('routes_Names',routes_Names)