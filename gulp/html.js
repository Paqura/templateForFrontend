var gulp = require('gulp'),
    nunjucks = require('gulp-nunjucks-render'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    paths = require('./paths');


gulp.task('html', function () {
  return gulp.src(paths.html.src())
      .pipe(nunjucks({
        path: [paths.html.srcDir()]
      }))
      .pipe(gulp.dest(paths.html.dist()))
      .pipe(reload({stream: true}));
});