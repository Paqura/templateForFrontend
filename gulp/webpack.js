var gulp = require("gulp"),
    webpack = require('webpack'),
    config = require('../webpack.config.js'),
    paths = require('./paths'),
    webpackStream = require('webpack-stream');

gulp.task('webpack', () => {
  gulp.src('./src/js/index.js')
      .pipe(webpackStream(config), webpack)
      .pipe(gulp.dest('./dist/js'));
});