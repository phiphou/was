var conf = require("./webpack/webpack.common.js");

exports.config = {
  baseUrl: 'http://127.0.0.1:'+conf.metadata.port ,
  framework: 'jasmine2',
  specs: ['../src/**/*.e2e.spec.js'],
  allScriptsTimeout: 300000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
    includeStackTrace: true,
    print: function() {}
  },
  directConnect: true,
  capabilities: {
    "browserName": "chrome",
    "maxInstances": 1,
    //"version": 53,
    //"platform": "WINDOWS",
    "seleniumProtocol": "WebDriver"
  },
  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: true
    }));
    browser.ignoreSynchronization = true;
  },
  useAllAngular2AppRoots: true
};
