import {join} from 'path';
import * as config from '../config';

import gulp from 'gulp';
import pump from 'pump';

const paths = {
  src: join(config.SRC_DIR, config.favicon.src, config.favicon.glob),
  dest: join(config.DEST_DIR, config.favicon.dest)
};

export default function favicon(cb) {
  pump([
    gulp.src(paths.src),
    gulp.dest(paths.dest)
  ], cb);
}