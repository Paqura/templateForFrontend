var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var buffer = require('vinyl-buffer');
var csso = require('gulp-csso');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');

gulp.task('png:sprites', function () {
  var spriteData = gulp.src('src/images/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    algorithm: 'top-down'
  }));

  var imgStream = spriteData.img
      .pipe(buffer())
      .pipe(imagemin())
      .pipe(gulp.dest('src/scss/components/icons/'));

  var imgDoubling = imgStream
      .pipe(gulp.dest('dist/css/'));

  var cssStream = spriteData.css
      .pipe(csso())
      .pipe(gulp.dest('src/scss/'));

  return merge(imgStream, cssStream, imgDoubling);
});