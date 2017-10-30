var gulp = require("gulp");
var mockServer = require("gulp-mock-server");

gulp.task("mock", function() {
    gulp.src(".").pipe(
        mockServer({
            port: 8090,
            allowCrossOrigin: true
        })
    );
});