import { tl } from '../const/_const';

const moveFromLeft = element => {
    tl.staggerFromTo(
        element,
        0.25, { opacity: 0, x: 10 }, { opacity: 1, x: 0 },
        0.5
    );
};

window.moveFromLeft = moveFromLeft;