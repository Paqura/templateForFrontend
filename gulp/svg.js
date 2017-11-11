var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    cheerio = require('gulp-cheerio'),
    pump = require('pump'),
    imagemin = require('gulp-imagemin'),
    replace = require('gulp-replace'),
    paths = require('./paths');

gulp.task('svg:symbols', function(callback) {
    pump([
            gulp.src(paths.svg.src()),
            // imagemin(),
            cheerio({
                run: function($) {
                    $('[fill]').removeAttr('fill');
                },
                parserOptions: { xmlMode: true }
            }),
            replace("&gt;", ">"),
            svgstore({ inlineSvg: true }),
            gulp.dest(paths.images.dist())
        ],
        callback
    )
});