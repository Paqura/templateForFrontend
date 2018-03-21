import gulp from 'gulp';
import * as config from '../config';

import clean from './clean';

import css from './css';
import * as html from './html';
import images from './images';
import js from './js';
import icons from './icons';
import fonts from './fonts';
import favicon from './favicon';

import watch from './watch';
import server from './server';

const prodTasks = gulp.series(clean, gulp.parallel(
  html.pages, 
  html.popup, 
  html.data, 
  css, 
  images, 
  js, 
  icons, 
  fonts, 
  favicon
));

const devTasks = 
  gulp.series(
    clean,
    html.pages, 
    html.popup, 
    html.data, 
    css, 
    icons, 
    images, 
    js, 
    fonts, 
    favicon, 
  gulp.parallel(
    server, 
    watch
  ));

const tasks = config.isProd
  ? prodTasks
  : devTasks;

export default tasks;