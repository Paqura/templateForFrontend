/* точка входа */

$(document).ready(function(){

  jsPhone();
  function jsPhone() {
    $('.js-phone').intlTelInput({
      initialCountry: 'ru',
      autoPlaceholder: "polite",
      placeholderNumberType: "MOBILE",
      preferredCountries: ['ru'],
      separateDialCode: false,
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.4/js/utils.js'
    });

    $(document).on('focus onFlagSet', '.js-phone', function () {
      var place = $(this).attr('placeholder');

      if (place == '+7 (___) ___-__-__') {
        $(this).val('');
        place = place.replace(/_/g, '9');
        $(this).mask(place);
      } else if (place !== '+7 (999) 999-99-99') {
        $(this).val('');
        place = place.replace(/\w/g, '9');
        $(this).mask(place)
      }
    });
  }
});
