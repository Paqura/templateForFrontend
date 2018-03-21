import * as config from '../config';

import browserSync from 'browser-sync';

export const bs = browserSync.create();

export default function server() {
  bs.init({
    server: {
      baseDir: config.DEST_DIR
    },
    open: false,
    notify: false,
    ui: false
  });
}
