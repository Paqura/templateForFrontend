import gulp from 'gulp';
import pump from 'pump';

import { join } from 'path';
import * as config from '../config';

const paths = {
  src: join(config.SRC_DIR, config.assets.src, config.assets.glob),
  dest: join(config.DEST_DIR, config.assets.dest)
};

export default function assets(cb) {
  pump([
    gulp.src(paths.src),
    gulp.dest(paths.dest)
  ], cb);
}