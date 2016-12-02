/*cv*/
$(".cv").hover(
       function () {$("#head1").css("visibility", "visible")},
         function () {$("#head1").css("visibility", "hidden") 
                     });
/*
$(".cv").hover(
       function () {$(".header, .footer").css("background-color", "#7e4e31")},
         function () {$(".header, .footer").css("background-color", "#111")
                     }); */

/*philosophy-stuff*/
$(".philosophy-stuff").hover(
       function () {$("#head2").css("visibility", "visible")},
         function () {$("#head2").css("visibility", "hidden") 
                     });
/*
$(".philosophy-stuff").hover(
       function () {$(".header, .footer").css("background-color", "#812933")},
         function () {$(".header, .footer").css("background-color", "#111") 
                     }); */

/*photography-stuff*/

$(".photography-stuff").hover(
       function () {$("#head3").css("visibility", "visible")},
         function () {$("#head3").css("visibility", "hidden") 
                     });

/*
$(".photography-stuff").hover(
       function () {$(".header, .footer").css("background-color", "#363d55")},
         function () {$(".header, .footer").css("background-color", "#111") 
                     }); */

/*other*/
$(".other").hover(
       function () {$("#head4").css("visibility", "visible")},
         function () {$("#head4").css("visibility", "hidden") 
                     });
/*
$(".other").hover(
       function () {$(".header, .footer").css("background-color", "#1b684c")},
         function () {$(".header, .footer").css("background-color", "#111") 
                     }); */

/*SMOOTH SCROLL*/
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