module.exports = config => {
  config.set({
    frameworks: ['jasmine'],
    files: ['karma.entry.js'],
    preprocessors: {
      'karma.entry.js': ['coverage', 'webpack', 'sourcemap']
    },
    coverageReporter: {
      dir: '../coverage/',
      reporters: [{
        type: 'text-summary'
      }, {
        type: 'json'
      }, {
        type: 'html'
      }]
    },
    webpack: require('./webpack.test.js'),
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha', 'coverage'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    colors: true,
    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    browsers: process.env.TRAVIS ? ['TRAVIS_CHROME'] : [ //'PhantomJS'
      'Chrome'
    ]
  });
};
