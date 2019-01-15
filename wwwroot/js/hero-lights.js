function animateLight(el, speed) {
  $(el).css('left', '0px').animate({
    left: '99%',
  }, 5000 + speed, 'linear', function() {
    animateLight(el, speed);
  });
}

$(function() {
  var hero = $('.not-found');
  if (!hero || !hero.length) {
    return;
  }

  var heroHeight = $(hero).height();
  for (var i = 0; i < 10; i += 1) {
    var light = $('<div>').addClass('hero-light').attr('id', 'hero-light-' + i);
    $(hero).append(light);

    var yPos = Math.random() * heroHeight;
    $(light)
      .css('top', Math.floor(yPos) + 'px')
      .css('left', '0px');

    var speed = Math.floor(Math.random() * 5000);
    animateLight(light, speed);
  }
});
