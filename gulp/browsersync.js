var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    paths = require('./paths');

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: paths.base.dist
    },
    open: true
  });
});