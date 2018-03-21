import {join} from 'path';
import * as config from '../config';
import {bs} from './server';

import gulp from 'gulp';
import pump from 'pump';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config.babel.js';

const paths = {
  src: join(config.SRC_DIR, config.js.src, config.js.fileName),
  dest: join(config.DEST_DIR, config.js.dest)
};

export default function js(cb) {
  pump([
    gulp.src(paths.src),
    webpackStream(webpackConfig),
    gulp.dest(paths.dest),
    bs.stream()
  ], cb);
}