//Loads when the JavaScript has loaded. When menu-trigger is clicked, the function slideToggle occurs. The 500 is the length of the animation.

$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  })

//When the window is resized, the display: none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('nav ul').removeAttr('style');
    }
  });
});
