import gulp from 'gulp';
import pump from 'pump';
import gulpMock from 'gulp-mock-server';

export default function mock(cb) {
  pump([
    gulp.src('.'),
    gulpMock({port: 8090, allowCrossOrigin: true})
  ], cb);
}
