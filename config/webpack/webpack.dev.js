const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const DefinePlugin = webpack.DefinePlugin;
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig.metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV
});

module.exports = webpackMerge(commonConfig, {
  metadata: METADATA,
  debug: true,
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve('./dist'),
    publicPath: 'http://' + METADATA.host + ':' + METADATA.port + '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js'
  },
  plugins: [
    Reference: https://webpack.github.io/docs/list-of-plugins.html#webpackbrowserplugin
    new WebpackBrowserPlugin({
      browser: 'Chrome',
      port: METADATA.port
    }),
  ],
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },
  // Reference: https://github.com/postcss/autoprefixer-core
  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ],
  // Reference: http://webpack.github.io/docs/configuration.html#devserver
  // Reference: http://webpack.github.io/docs/webpack-dev-server.html
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    stats: 'minimal',
    contentBase: './src/public'
  }
});
