import {join} from 'path';
import * as config from '../config';

import gulp from 'gulp';
import pump from 'pump';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';

const paths = {
  src: join(config.SRC_DIR, config.images.src, config.images.glob),
  dest: join(config.DEST_DIR, config.images.dest)
};

export default function images(cb) {
  pump([
    gulp.src(paths.src),
    imagemin([mozjpeg()]),
    gulp.dest(paths.dest)
  ], cb);
}
