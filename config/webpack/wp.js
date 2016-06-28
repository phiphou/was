var webpack = require('webpack');
var conf = require("./webpack.prod.js");
var ora = require('ora');
/**
 * Webpack
 * Webpack API is used instead of the cmdline to avoid bad formated output.
 * Reference: https://webpack.github.io/docs/node.js-api.html#stats-tojson
 */
var spinner = ora('building...');
spinner.start();
webpack(conf, function(err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    assets: true,
    timings: true,
    hash: true,
    version: true,
    chunkModules: false
  }));
});
