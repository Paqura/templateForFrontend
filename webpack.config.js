var webpack = require('webpack'),
    paths = require('./gulp/paths'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  output: {
    filename: 'scripts.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['latest', { modules: false }]
          ]
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};