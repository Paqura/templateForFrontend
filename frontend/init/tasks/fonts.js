import {join} from 'path';
import * as config from '../config';

import gulp from 'gulp';
import pump from 'pump';

const paths = {
  src: join(config.SRC_DIR, config.fonts.src, config.fonts.glob),
  dest: join(config.DEST_DIR, config.fonts.dest)
};

export default function fonts(cb) {
  pump([
    gulp.src(paths.src),
    gulp.dest(paths.dest)
  ], cb);
}