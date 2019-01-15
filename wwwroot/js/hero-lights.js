function Light(id) {
  this.id = id;
  this.xPos = 0;
  this.yPos = 0;
  this.speed = 1;
}

function animateLight(el, speed) {
  $(el).css('left', '0px').animate({
    left: '100%',
  }, 5000 + speed, 'linear', function() {
    animateLight(el, speed);
  });
}

$(function() {
  return;

  var hero = $('.hero');
  if (!hero || !hero.length) {
    return;
  }

  var heroHeight = $(hero).height();
  var lights = [];
  for (var i = 0; i < 10; i += 1) {
    lights.push(new Light(i));

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
