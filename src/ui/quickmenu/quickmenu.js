$(document).ready(function() {
    var quickmenu = $('.quickmenu');

    $(".quickmenu__item-mobile .quickmenu__link").on('click', function(event) {
        event.preventDefault();
        if (!$(quickmenu).hasClass('is-mobile')) {
            $(quickmenu).addClass('is-mobile');
              $('.quickmenu.is-mobile').animate({
                'width': '100%',
                'max-width': '100%'
              }, 300);
        } else {
            $(quickmenu).removeClass('is-mobile');
          $('.quickmenu').animate({
            'width': 'auto',
            'max-width': '250px'
          }, 300);
        }
    });

});