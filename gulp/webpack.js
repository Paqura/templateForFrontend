var gulp = require("gulp"),
    webpack = require('webpack'),
    config = require('../webpack.config.js'),
    paths = require('./paths'),
    rename = require('gulp-rename'),
    hash = require('gulp-hash-filename'),
    webpackStream = require('webpack-stream');

gulp.task('webpack', () => {
  gulp.src('./src/js/index.js')
      .pipe(webpackStream(config), webpack)
      .pipe(gulp.dest('./dist/js'));
});
