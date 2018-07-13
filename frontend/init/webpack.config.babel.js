import * as config from './config';

import webpack from 'webpack';
import UglifyJS from 'uglifyjs-webpack-plugin';
import path from 'path';


console.log(path.resolve(__dirname))
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
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins : WebpackPlugins,
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
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
