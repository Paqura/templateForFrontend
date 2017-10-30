$(document).ready(function () {
  $('.tabs__inner:not(:first)').hide();

  $('.tabs__item').on('click', function (event) {
    event.preventDefault();

    $('.tabs__inner').hide();
    $('.tabs__item').removeClass('is-active');
    let $currentTabId = $(this).attr('href');
    $(this).addClass('is-active');
    $($currentTabId).fadeIn('slow');

    isSlider($currentTabId);
  });


  changeSelectTab("select.select-deposit");
  changeSelectTab("select.select-depository");
  changeSelectTab("select.select-bank-counts");
  changeSelectTab('select.select-years');
});

