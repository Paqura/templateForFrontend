/*global process, __dirname*/

import minimist from 'minimist';
import {join, normalize} from 'path';

const argv = minimist(process.argv.slice(2));

// noinspection Annotator
export const env = argv.prod ? 'prod' : 'dev';

// noinspection Annotator
export const isProd = argv.prod;

export const ROOT_DIR = normalize(join(__dirname, '..'));
export const SRC_DIR = join(ROOT_DIR, 'src');
export const DIST_DIR = 'dist';
export const DEST_DIR = join(ROOT_DIR, DIST_DIR, env);

export const assets = {
  src: 'assets',
  dest: 'assets',
  glob: '**/*.*'
};

export const css = {
  src: 'scss',
  dest: 'css',
  glob: '**/*.scss',
  bundleName: 'styles.css',
};

export const js = {
  src: 'js',
  dest: 'js',
  fileName: 'index.js',
  bundleName: 'scripts.js',
  glob: '**/*.js',
  vue: '**/*.vue'
};

export const fonts = {
  src: 'fonts',
  dest: 'fonts',
  glob: '**/*.*'
};

export const html = {
  src: 'njk',
  pages: 'pages',
  popup: 'popup',
  data: 'data',
  destPages: '.',
  destPopup: './popup',
  destData: './data',
  glob: '*.njk',
  watchsrc: '**/*.njk',
};

export const images = {
  src: 'images/raster',
  dest: 'images',
  glob: '**/*.*'
};

export const icons = {
  src: 'images/vector',
  fill: 'images/vector/fill',
  nofill: 'images/vector/nofill',
  dest: 'images',
  glob: '**/*.*'
};

export const favicon = {
  src: 'favicon',
  dest: '.',
  glob: '**/*.*'
};