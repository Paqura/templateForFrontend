import {join} from 'path';
import * as config from '../config';

import gulp from 'gulp';
import pump from 'pump';
import imagemin from 'gulp-imagemin';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';

const paths = {
  src: join(config.SRC_DIR, config.icons.src, config.icons.glob),
  dest: join(config.DEST_DIR, config.icons.dest)
};

export default function icons(cb) {
  pump([
    gulp.src(paths.src),
    imagemin(),
    cheerio({
      run: function ($) {
        $('[fill!=none]').removeAttr('fill');
      },
      parserOptions: {
        xmlMode: true
      }
    }),
    svgstore(),
    gulp.dest(paths.dest)
  ], cb);
}
