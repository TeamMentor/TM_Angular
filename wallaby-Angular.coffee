module.exports = (wallaby)->
  console.log '[in Wallaby]'

  config =
    files : [ 'bower_components/angular/angular.js'
              'bower_components/angular-route/angular-route.js'
              'bower_components/angular-mocks/angular-mocks.js'
              'bower_components/angular-foundation-bower/mm-foundation-tpls.min.js'
              'bower_components/angular-slider/slider.js'
              'bower_components/angular-ui-router/release/angular-ui-router.min.js'
              'bower_components/chai/chai.js'
              'bower_components/sinonjs/sinon.js'
              'src/**/*.coffee'  ]                     # app source code
    tests : [
              'test/**/*.coffee' ]

    testFramework: 'mocha'

  return config