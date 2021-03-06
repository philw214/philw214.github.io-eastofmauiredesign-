$(document).ready(function() {
  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone").removeClass("mini"));

  // add sticky nav after scrolling down
  $(window).on("scroll", function() {
    var fromTop = $(window).scrollTop();
    $("body").toggleClass("down", (fromTop > 810));
  });

  // hamburger menu
  $('.menu-toggle').click(function() {
    $('ul').toggleClass('closed');
    $(this).toggleClass('open');
  });

  $("#intro-video").click(function(){
    removeIntroButtons();
  });

  // scroll down to main section
  $(".continue").click(function(e) {
    e.preventDefault();
    var videoSrc = $("#intro-video").attr('src');
    // stop video
    $("#intro-video").attr('src', videoSrc);
    setTimeout(function() {
    $('html, body').animate({
    scrollTop: $("#main-content").offset().top
    }, 1000);
    }, 100);

    setTimeout(function() {
      removeIntroButtons();
    }, 1000);
  });

  function removeIntroButtons() {
    $(".intro-button").remove();
  }

});
