import {join} from 'path';
import * as config from '../config';

import gulp from 'gulp';
import pump from 'pump';
import imagemin from 'gulp-imagemin';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';

const paths = {
  srcFill: join(config.SRC_DIR, config.icons.fill, config.icons.glob),
  srcNoFill: join(config.SRC_DIR, config.icons.nofill, config.icons.glob),
  dest: join(config.DEST_DIR, config.icons.dest)
};

export const iconsNofill = (cb) => {
  pump([
    gulp.src(paths.srcNoFill),
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
};

export const iconsFill = (cb) => {
  pump([
    gulp.src(paths.srcFill),
    imagemin(),
    cheerio({
      parserOptions: {
        xmlMode: true
      }
    }),
    svgstore(),
    gulp.dest(paths.dest)
  ], cb);
};
