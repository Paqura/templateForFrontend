var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(callback) {
    runSequence('clean', ['html', 'scss', 'svg:symbols', 'png:sprites', 'vendors', 'webpack', 'fonts', 'mock'],
        'images',
        'browserSync',
        'watch',
        callback
    );
});