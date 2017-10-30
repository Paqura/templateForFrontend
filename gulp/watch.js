var gulp = require('gulp'),
    paths = require('./paths');

gulp.task('watch', function() {
    gulp.watch([paths.html.srcWatch()], ['html']);
    gulp.watch([paths.scss.src(), paths.scss.csssrc()], ['scss']);
    gulp.watch([paths.js.src()], ['webpack']);
    gulp.watch([paths.images.src()], ['images']);
    gulp.watch([paths.fonts.src()], ['fonts']);
    gulp.watch([paths.vendors.src()], ['vendors']);
});