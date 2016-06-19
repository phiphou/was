const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
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
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(NODE_ENV)
      }
    }),
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
  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ],
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
