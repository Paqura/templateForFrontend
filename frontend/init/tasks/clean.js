import * as config from '../config';

import del from 'del';

export default function clean() {
    return del([config.DEST_DIR]);
}