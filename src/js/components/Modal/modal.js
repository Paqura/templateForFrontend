import { _chunk } from '../../const/_const';
import { TimelineMax } from 'gsap';


document.addEventListener('DOMContentLoaded', function() {
    let buttonOpenModal = document.querySelector('.js-modal-opener');
    let modal = document.querySelector('.modal');
    let tl = new TimelineMax();

    buttonOpenModal.addEventListener('click', event => {
        event.preventDefault();

        let target = event.target;
        target.classList.toggle(`is-active`);

        tl.fromTo(modal, 0.25, { y: 200 }, { y: 0 });

        modal.classList.toggle('v-hidden');
    });

});