var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    paths = require('./paths');

gulp.task('fonts', function () {
  return gulp.src(paths.fonts.src())
      .pipe(gulp.dest(paths.fonts.dist()))
      .pipe(reload({stream: true}));
});