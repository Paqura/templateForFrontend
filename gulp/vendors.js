var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    paths = require('./paths'),
    pump = require('pump');

gulp.task("vendors", function(cb) {
    return gulp.src([
        'src/vendors/**/jquery.min.js',
        'src/vendors/**/jquery.mCustomScrollbar.concat.min.js',
        'src/vendors/**/jquery.formstyler.min.js',
        'src/vendors/**/jquery.mousewheel.min.js',
        'src/vendors/**/animatescroll.js',
        'src/vendors/**/jquery.waypoints.js',
        'src/vendors/**/sticky.js',
        'src/vendors/**/mask.js',
        'src/vendors/**/slick.min.js',
        'src/vendors/**/jquery.magnific-popup.js',
        'src/vendors/**/Sortable.min.js',
        'src/vendors/**/sweetalert.min.js'
    ])

    .pipe(uglify())
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest("dist/vendors"));

});