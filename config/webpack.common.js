const webpack = require('webpack');
const path = require('path');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ProvidePlugin = webpack.ProvidePlugin;
const DefinePlugin = webpack.DefinePlugin;
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const chalk = require('chalk');
const NODE_ENV = process.env.NODE_ENV;
const ENV_PRODUCTION = NODE_ENV === 'production';
const ENV_DEVELOPMENT = NODE_ENV === 'development' || !ENV_PRODUCTION;
const ENV_TRAVIS = process.env.TRAVIS || false;
const PORT = 8080;
var isTest = process.env.npm_lifecycle_event === 'test' || process.env.npm_lifecycle_event === 'test-watch';
const METADATA = {
  title: 'WAS',
  port: 8080,
  baseUrl: '/'
};
module.exports = {
  metadata: METADATA,
  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   */
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendors.ts',
    'app': './src/main.ts' // our angular app
  },
  /**
   * Resolve
   * Reference: http://webpack.github.io/docs/configuration.html#resolve
   */
  resolve: {
    //cache: false,
    root: path.resolve('.'),
    // only discover files that have those extensions
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.sass', '.html'],
    alias: {
      'app': 'src/app',
      'common': 'src/common'
    },
    modulesDirectories: ['node_modules']
  },
  // ts: {
  //   silent: true
  // },
  module: {
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/],
    preLoaders: [],
    loaders: [{
        test: /\.ts$/,
        loader: 'ts',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 -> Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375, // 2375 -> Duplicate string index signature
            2502 // 2502 -> Referenced directly or indirectly
          ]
        },
        exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
      }, {
        test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=fonts/[name]-[hash:7].[ext]"
      },
      // copy those assets to output,
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file?name=img/[name].[ext]'
      },
      // Support for CSS as raw text
      // use 'null' loader in test mode (https://github.com/webpack/null-loader)
      {
        test: /\.css$/,
        exclude: path.resolve('src/app'),
        loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      },
      // support for .scss files
      // use 'null' loader in test mode (https://github.com/webpack/null-loader)
      {
        test: /\.(scss|sass)$/,
        exclude: path.resolve('src/app'),
        loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
      },
      // support for .html as raw text
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    // // Define env variables to help with builds
    // // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    //new OccurenceOrderPlugin(true),
    new CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    // Copy assets from the public folder
    // Reference: https://github.com/kevlened/copy-webpack-plugin
    new CopyWebpackPlugin([{
      from: path.resolve('src/public')
    }], {
      ignore: [{
        glob: '**/*.db',
        dot: true
      }]
    }),
    // Inject script and link tags into html files
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body',
      chunksSortMode: 'dependency'
    }),
    // Extract css files
    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    new ExtractTextPlugin('css/[name]-[hash:7].css')
  ],
  /**
   * Sass
   * Reference: https://github.com/jtangelder/sass-loader
   */
  sassLoader: {
    includePaths: [path.resolve(__dirname, "../node_modules/foundation-sites/scss")]
  }
};
