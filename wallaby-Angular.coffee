module.exports = (wallaby)->

  #console.log wallaby
  console.log '[in Wallaby]'

  just_Load = (file)->
    return { pattern: file, instrument: false, load: true, ignore: false }

  config =
    files : [
              'build/css/flare-stylesheet.css'
              just_Load 'bower_components/angular/angular.js'
              #just_Load 'bower_components/angular-route/angular-route.js'
              just_Load 'bower_components/angular-mocks/angular-mocks.js'
              #just_Load 'bower_components/angular-foundation-bower/mm-foundation-tpls.min.js'
              #just_Load 'bower_components/angular-slider/slider.js'
              just_Load 'bower_components/angular-ui-router/release/angular-ui-router.min.js'
              just_Load 'bower_components/chai/chai.js'
              #just_Load 'bower_components/sinonjs/sinon.js'
              'src/**/*.coffee'
              ]
    tests : [
              'test/**/*.coffee'
            ]

    #testFramework: 'mocha'

  return config