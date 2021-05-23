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

//modal 

$('.rev').on('click', function() {
  $('.overlay, .modal').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, .modal').fadeOut('slow');
});

// scroll 
$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
      $('.pageup').fadeIn();
  } else {
      $('.pageup').fadeOut();
  }
});

$("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});