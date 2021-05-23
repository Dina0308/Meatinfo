//button
$('.cli').on('click', function(){
    $('.in').fadeIn();
  });
$('.in').on('click', function(){
    $('.in').fadeOut();
  });

//approval
  $(".app__text").hide();
  $( ".app" ).mouseenter(function() {
    $(".app__text").show();
  }).mouseleave(function() {
    $(".app__text").hide();
  });

  //slider
  document.addEventListener('DOMContentLoaded', function () {
    
    new SimpleAdaptiveSlider('.slider', {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
      
    });
  });

  

