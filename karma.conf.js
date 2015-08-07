// Karma configuration
// Generated on Fri Jul 03 2015 07:07:23 GMT+0100 (BST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],

    files: [
              'build/js/lib.js',
              //'build/js/code.js',
              'build-js/**/*.js',
              'bower_components/angular-mocks/angular-mocks.js',
              'bower_components/chai/chai.js',
              'bower_components/sinonjs/sinon.js',
              //'src/**/*.coffee',
              'test/**/*.coffee'
            ],
    exclude       : [ ],
    preprocessors : {
                        'test/**/*.coffee': ['coffee'],
                        //'src/**/*.coffee': ['coffee'],
                        //'src/**/*.js': ['coverage']
                        //'build/js/code.js' : ['coverage']
                        'build-js/**/*.js': ['coverage']
                    },
    reporters     : ['progress'],
    port          : 9876,
    colors        : true,
    logLevel      : config.LOG_INFO,  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    autoWatch     : true,            // enable / disable watching file and executing tests whenever any file changes
    browsers      : ['PhantomJS'],    //browsers: ['Chrome','PhantomJS'],
    singleRun     : true  // if true, Karma captures browsers, runs the tests and exits

    ,
    coverageReporter : {
      type : 'html',
      dir : '~/coverage/'
    }

  })
};
