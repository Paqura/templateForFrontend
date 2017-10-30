var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    imageopt = require('gulp-image-optimization'),
    paths = require('./paths');

gulp.task('images', function() {
    return gulp.src(paths.images.src())
        // .pipe(imageopt({
        //     optimizationLevel: 5,
        //     progressive: true,
        //     interlaced: true
        // }))
        .pipe(gulp.dest(paths.images.dist()))
        .pipe(reload({ stream: true }));
});