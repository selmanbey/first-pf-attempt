/*cv-button*/
$(".cv").hover(
       function () {$("#head1").css("visibility", "visible")},
         function () {$("#head1").css("visibility", "hidden")
                     });

/*philosophy-stuff-button*/
$(".philosophy-stuff").hover(
       function () {$("#head2").css("visibility", "visible")},
         function () {$("#head2").css("visibility", "hidden") 
                     });

/*photography-stuff-button*/

$(".photography-stuff").hover(
       function () {$("#head3").css("visibility", "visible")},
         function () {$("#head3").css("visibility", "hidden") 
                     });


/*other-button*/
$(".other").hover(
       function () {$("#head4").css("visibility", "visible")},
         function () {$("#head4").css("visibility", "hidden") 
                     });

/*SMOOTH SCROLLING --admittedly, I've just copy-pasted this from another website: I really don't understand how and why the code works here. But hey! It works :) */
$(function() { $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});