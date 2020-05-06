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

//SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex +=n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//LIGHTBOX
$(document).on('click','.gg-element',function(){
  var selected=$(this);
  var prev=$(this).prev().find('img');
  var next=$(this).next().find('img');
  $('#gg-screen').show();
  var l=$(".gg-element").length-1;
  var p=$(".gg-element").index(selected);
  function buttons(){
    if (l > 1) {
      if (p == 0){
        return '<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt">&rarr;</div>';
      }
      else if (p == l) {
        return '<div class="gg-close gg-bt">&times</div><div class="gg-prev gg-bt">&larr;</div>';
      }
      else{
        return '<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt">&rarr;</div><div class="gg-prev gg-bt">&larr;</div>';
      }
    }
    else{
      return '<div class="gg-close gg-bt">&times</div>';
    }
  }
  buttons();
  var content=buttons();
  $("#gg-screen").html('<div class="gg-image"></div>' + content);
  $(".gg-image").html('<img src="'+ $('img', this).attr('src') +'">');
  $("body").css('overflow','hidden');
  $(document).on('click','.gg-close',function(){
    $("#gg-screen").hide();
    $("body").css('overflow','auto');
  });
  $("#gg-screen").on('click', function(e) {
    if (e.target == this){
      $("#gg-screen").hide();
      $("body").css('overflow','auto');
    }
  });
  $(document).on('click','.gg-prev',function(){
    selected=selected.prev();
    prev=selected.find('img');
    var previmg='<img src="'+ prev.attr('src') +'">';
    $(".gg-image").html(previmg);
    p=$(".gg-element").index(selected);
    buttons();
    content=buttons();
    $("#gg-screen").html('<div class="gg-image">'+ previmg + '</div>' + content);
  });
  $(document).on('click','.gg-nxt',function(){
    selected=selected.next();
    next=selected.find('img');
    var nxtimg='<img src="'+ next.attr('src') +'">';
    $(".gg-image").html(nxtimg);
    p=$(".gg-element").index(selected);
    buttons();
    content=buttons();
    $("#gg-screen").html('<div class="gg-image">'+ nxtimg + '</div>' + content);
  });
  $(document).on('keydown',function(e) {
    if(e.keyCode == 37 && p>0) {
      selected=selected.prev();
      prev=selected.find('img');
      var previmg='<img src="'+ prev.attr('src') +'">';
      $(".gg-image").html(previmg);
      p=$(".gg-element").index(selected);
      buttons();
      content=buttons();
      $("#gg-screen").html('<div class="gg-image">'+ previmg + '</div>' + content);
    }
    else if(e.keyCode == 39 && p < l) {
      selected=selected.next();
      next=selected.find('img');
      var nxtimg='<img src="'+ next.attr('src') +'">';
      $(".gg-image").html(nxtimg);
      p=$(".gg-element").index(selected);
      buttons();
      content=buttons();
      $("#gg-screen").html('<div class="gg-image">'+ nxtimg + '</div>' + content);
    }
  });
});
