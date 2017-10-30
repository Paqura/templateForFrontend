var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(callback) {
    runSequence('clean', ['html', 'scss', 'images', 'vendors', 'webpack', 'fonts', 'mock'],
        'browserSync',
        'watch',
        callback
    );
});