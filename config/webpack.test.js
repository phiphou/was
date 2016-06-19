const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: path.resolve('src'),

  },
  module: {
    preLoaders: [
      //  {
      //     test: /\.ts$/,
      //     loader: 'tslint-loader',
      //     exclude: [path.resolve('node_modules')]
      //   }
      //{
      //   test: /\.js$/,
      //   loader: 'source-map-loader',
      //   exclude: [
      //     // these packages have problems with their sourcemaps
      //     path.resolve('node_modules/rxjs'),
      //     path.resolve('node_modules/@angular')
      //   ]
      // }],
    ],
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
      exclude: [path.resolve('node_modules'), /\.(e2e)\.ts$/]
    }],
    postLoaders: [{
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        include: path.resolve('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }

    ]
  },
  plugins: [],
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  }
};
