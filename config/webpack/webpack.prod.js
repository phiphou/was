const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const DedupePlugin = webpack.optimize.DedupePlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ProvidePlugin = webpack.ProvidePlugin;
const DefinePlugin = webpack.DefinePlugin;
const path = require('path');
const chalk = require('chalk');
const pkg = require('../../package.json');
// const WebpackMd5Hash = require('webpack-md5-hash');
const NODE_ENV = process.env.NODE_ENV;
const ENV_PRODUCTION = NODE_ENV === 'production';
const ENV_DEVELOPMENT = NODE_ENV === 'development' || !ENV_PRODUCTION;
const ENV_TRAVIS = process.env.TRAVIS || false;
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig.metadata, {
  host: HOST,
  port: PORT,
  ENV: NODE_ENV,
});

module.exports = webpackMerge(commonConfig, {
  metadata: METADATA,
  debug: false,
  // devtool: 'source-map',
  // Reference: http://webpack.github.io/docs/configuration.html#output
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: 'js/[name]-[hash:7].js',
    chunkFilename: 'js/[name].chunk-[hash:7].js'
    // sourceMapFilename: '[name].[chunkhash].bundle.map'
  },
  ts: {
    silent: true
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(NODE_ENV)
      }
    }),
    // Reference: https://github.com/clessg/progress-bar-webpack-plugin
    new ProgressBarPlugin({
      format: 'build [:bar] ' + chalk.green.bold(':percent') + ' :msg ' + '(:elapseds)',
      // clear: true,
      width: ENV_TRAVIS ? 0 : 50 // Dont use ProgressBarPlugin if on TRAVIS to avoid "ugly reports"
    }),
    // Reference: https://webpack.github.io/docs/list-of-plugins.html#bannerplugin
    new webpack.BannerPlugin(getBanner(), {
      raw: false,
      entryOnly: false
    }),
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    new webpack.NoErrorsPlugin(),
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    new webpack.optimize.DedupePlugin(),
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        dead_code: false, // eslint-disable-line camelcase
        screw_ie8: false, // eslint-disable-line camelcase
        unused: true,
        warnings: false
      }
    }),
    new CompressionPlugin({
      test: /\.(css|html|js|map)$/,
      threshold: 0,
      minRatio: 1
    })
  ],
  tslint: {
    emitErrors: true,
    failOnHint: true,
    resourcePath: 'src'
  },
  htmlLoader: {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [
      [/#/, /(?:)/],
      [/\*/, /(?:)/],
      [/\[?\(?/, /(?:)/]
    ],
    customAttrAssign: [/\)?\]?=/]
  }
});
// Generate banner text for Webpack banner"s plugin.
function getBanner() {
  console.log(NODE_ENV);
  var date = new Date();
  var month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var fdate = month + "-" + day + "-" + date.getFullYear();
  return pkg.name + " - v" + pkg.version + " - " + fdate + "\n" + pkg.homepage + "\nCopyright (c) " + date.getFullYear() + " " + pkg.author + " - Licensed " + pkg.license;
}
