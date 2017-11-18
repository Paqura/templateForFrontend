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

        'src/vendors/**/mask.js',
        'src/vendors/**/slick.min.js',
        'src/vendors/**/sweetalert.min.js'
    ])

    .pipe(uglify())
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest("dist/vendors"));

});