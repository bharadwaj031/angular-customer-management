module.exports = function(config){
  config.set({

    basePath : '../app',

    files : [
      'lib/angular/angular.js',
      'lib/angular/angular-*.js',
      'lib/moment.min.js',
      'lib/lodash.min.js',
      '../test/lib/angular-mocks.js',
      '../test/lib/sinon-1.15.0.js',
      'js/**/*.js',
      '../test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'jasmine-core',
      'karma-chrome-launcher',
      'karma-jasmine'      
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
