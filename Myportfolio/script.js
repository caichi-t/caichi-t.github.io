$(function() {
  var about = $('.about').offset().top;
  var contact = $('.contact').offset().top;
  var skill = $('.skills').offset().top;
  var num = $('.skill-box').length;
  var i = 1;

  $(window).scroll(function(){
    var dis = $(this).scrollTop();
    if(dis >= about) {
      $('.top-btn').fadeIn();
    } else {
      $('.top-btn').fadeOut();
    }
    if(dis >= skill - 200 && i <= num) {
        var timer = setInterval(function() {
          $('.skill-box:nth-child(' + i + ')').animate({opacity: 1.0}, 1500);
          i++;
          if(i > num) {
            clearInterval(timer);
          }
        }, 100)
      }
    });

  $('.top-btn').click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
  });

  $('#btn-to-about').click(function() {
    $('html, body').animate({scrollTop: about}, 500);
    return false;
  });

  $('#btn-to-contact').click(function() {
    $('html, body').animate({scrollTop: contact}, 800);
    return false;
  });

  $('.en-btn').click(function() {
    $('.ja').hide();
    $('.en').fadeIn();
  });

  $('.ja-btn').click(function() {
    $('.en').hide();
    $('.ja').fadeIn();
  });
});
