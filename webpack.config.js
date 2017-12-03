var webpack = require('webpack'),
    path = require('path'),
    paths = require('./gulp/paths'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: `[name].min.js`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['latest', {modules: false}]
          ]
        }
      },
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })

  ]
};