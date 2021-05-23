$('.cli').on('click', function(){
    $('.in').fadeIn();
  });
$('.in').on('click', function(){
    $('.in').fadeOut();
  });

  $(".app__text").hide();
  $( ".app" ).mouseenter(function() {
    $(".app__text").show();
  }).mouseleave(function() {
    $(".app__text").hide();
  });