// Karma configuration
// Generated on Fri Jul 03 2015 07:07:23 GMT+0100 (BST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],

    files: [
              'build/js/lib.js',
              'build/js/code.js',
              //'bower_components/angular/angular.js',
              //'bower_components/angular-route/angular-route.js',
              'bower_components/angular-mocks/angular-mocks.js',
              //'bower_components/angular-foundation-bower/mm-foundation-tpls.min.js',
              //'bower_components/angular-slider/slider.js',
              //'bower_components/angular-ui-router/release/angular-ui-router.min.js',
              'bower_components/chai/chai.js',
              'bower_components/sinonjs/sinon.js',
              'test/**/*.coffee'
            ],
    exclude       : [ ],
    preprocessors : { 'test/**/*.coffee': ['coffee'] },
    reporters     : ['progress'],
    port          : 9876,
    colors        : true,
    logLevel      : config.LOG_INFO,  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    autoWatch     : true,            // enable / disable watching file and executing tests whenever any file changes
    browsers      : ['PhantomJS'],    //browsers: ['Chrome','PhantomJS'],
    singleRun     : true  // if true, Karma captures browsers, runs the tests and exits
  })
}
