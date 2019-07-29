$(function() {
  $('.nav-dropdown').mouseover(function() {
    var menu = $(this).find('.nav-dropdown-menu');
    $(menu).show();
  }).mouseout(function() {
    var viewWidth = $(window).width();
    if (viewWidth >= 992) {
      var menu = $(this).find('.nav-dropdown-menu');
      $(menu).hide();
    }
  });

  $(window).on('resize', function() {
    var viewWidth = $(window).width();
    if (viewWidth < 992) {
      $('.nav-dropdown .nav-dropdown-menu').show();
    } else {
      $('.nav-dropdown .nav-dropdown-menu').hide();
    }
  });
});
