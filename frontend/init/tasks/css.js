import {join} from 'path';
import * as config from '../config';
import {bs} from './server';

import gulp from 'gulp';
import pump from 'pump';
import sass from 'gulp-sass';
import sassLint from 'gulp-sass-lint';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import concat from 'gulp-concat';

const paths = {
  src: join(config.SRC_DIR, config.css.src, config.css.glob),
  dest: join(config.DEST_DIR, config.css.dest)
};

const processors = [autoprefixer(), cssnano()];

export default function css(cb) {
  // noinspection Annotator
  pump([
    gulp.src(paths.src),
    sassLint(),
    sassLint.format(),
    sassLint.failOnError(),
    //sourcemaps.init(),
    sass({includePaths: ['./node_modules/']}).on('error', sass.logError),
    concat(config.css.bundleName),
    postcss(processors),
    //sourcemaps.write('.'),
    gulp.dest(paths.dest),
    bs.stream()
  ], cb);
}