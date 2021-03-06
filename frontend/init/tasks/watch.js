import {join} from 'path';
import watch from 'gulp-watch';
import * as config from '../config';

import css from './css';
import * as html from './html';
import images from './images';
import js from './js';
import {iconsFill, iconsNofill} from './icons';
import fonts from './fonts';
import assets from './assets';

export default function watcher() {
  watch(join(config.SRC_DIR, config['css'].src, config['css'].glob), css);
  watch(join(config.SRC_DIR, config['html'].src, config['html'].watchsrc), html.pages);
  watch(join(config.SRC_DIR, config['html'].src, config['html'].watchsrc), html.popup);
  watch(join(config.SRC_DIR, config['html'].src, config['html'].watchsrc), html.data);
  watch(join(config.SRC_DIR, config['images'].src, config['images'].glob), images);
  watch(join(config.SRC_DIR, config['js'].src, config['js'].glob), js);
  watch(join(config.SRC_DIR, config['js'].src, config['js'].vue), js);
  watch(join(config.SRC_DIR, config['icons'].src, config['icons'].glob),  iconsFill, iconsNofill);
  watch(join(config.SRC_DIR, config['fonts'].src, config['fonts'].glob), fonts);
  watch(join(config.SRC_DIR, config['assets'].src, config['assets'].glob), assets);
}