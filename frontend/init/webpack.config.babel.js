import * as config from './config';

import UglifyJS from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';

const DevPlugins = [
  new webpack.ProvidePlugin({}),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
];

const ProdPlugins = [
  new UglifyJS({extractComments: true}),
  new webpack.ProvidePlugin({}),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
];

const WebpackPlugins = config.isProd
  ? ProdPlugins
  : DevPlugins;

export default {
  devtool : 'source-map',
  output : {
    filename: config.js.bundleName
  },
  resolve : {
    extensions: [
      '.js', '.vue', '.json'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins : WebpackPlugins,
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }, {
            loader: 'eslint-loader'
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
};