$(function(){

  $('.top-btn').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    },800);
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    if (window.matchMedia( "(max-width: 660px)" ).matches) {
      $('html,body').animate({
        'scrollTop': position - 70
      },500);
      } else {
        $('html,body').animate({
          'scrollTop': position - 100
        },500);
    }

  });

});
