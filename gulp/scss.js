var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sourcemaps = require('gulp-sourcemaps'),
    scss = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    concat = require('gulp-concat'),
    fileinclude = require('gulp-file-include'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    paths = require('./paths'),
    notify = require( 'gulp-notify' ),
    cleanCSS = require('gulp-clean-css');

gulp.task('scss', function() {
    return gulp
        .src([paths.scss.src(), paths.ui.src(), paths.scss.csssrc()])
        .pipe(plumber())
        .pipe(fileinclude())

        .pipe(sourcemaps.init())
        .pipe(scss({includePaths: ['./node_modules/']}).on( 'error', notify.onError(
            {
              message: "<%= error.message %>",
              title  : "Sass Error!"
            } ) )
        )
        .pipe(postcss([
            require("postcss-focus"),
            require("cssnano")({
                preset: "default"
            })
        ]))
        .pipe(autoprefixer({ browsers: ["last 2 versions"], cascade: false }))
        .pipe(cleanCSS({ compatibility: "ie11" }))
        .pipe(concat("styles.css"))
        .pipe(sourcemaps.write("."))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.scss.dist()))
        .pipe(reload({ stream: true }));
});