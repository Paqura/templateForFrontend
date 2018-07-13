import {join} from 'path';
import * as config from '../config';
import {bs} from './server';

import gulp from 'gulp';
import pump from 'pump';
import nunjucks from 'gulp-nunjucks-render';
import htmlmin from 'gulp-htmlmin';

const paths = {
  srcPages: join(config.SRC_DIR, config.html.src, config.html.pages, config.html.glob),
  srcPopup: join(config.SRC_DIR, config.html.src, config.html.popup, config.html.glob),
  srcData: join(config.SRC_DIR, config.html.src, config.html.data, config.html.glob),
  destPages: join(config.DEST_DIR, config.html.destPages),
  destPopup: join(config.DEST_DIR, config.html.destPopup),
  destData: join(config.DEST_DIR, config.html.destData)
};

const taskArray = (src, dest) => {
  return [
    gulp.src(src),
    nunjucks({
      path: join(config.SRC_DIR, config.html.src),
      data: {
        css_name: './css/styles',
        js_name: './js/scripts'
      }
    }),
    htmlmin({minifyJS: true, removeComments: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true}),
    gulp.dest(dest),
    bs.stream()
  ]
};

export const pages = (cb) => {
  pump(taskArray(paths.srcPages, paths.destPages), cb);
};

export const popup = (cb) => {
  pump(taskArray(paths.srcPopup, paths.destPopup), cb);
};

export const data = (cb) => {
  pump(taskArray(paths.srcData, paths.destData), cb);
};
