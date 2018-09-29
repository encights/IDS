
 /* ==============================================
Home Super Slider (images)
=============================================== */
 $('#slides').superslides({
      animation: 'fade'
    });



 

/* ==============================================
Drop Down Menu Fade Effect
=============================================== */

$('.nav-toggle').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(400);
    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(400)
    });

/* ==============================================
Drop Down Menu For Mobile
=============================================== */

$('.mobile-toggle').hover(function() {
    $(this).find('.dr-mobile').first().stop(true, true).slideToggle(400);
    }, function() {
    $(this).find('.dr-mobile').first().stop(true, true).slideToggle(400)
    });

 
/* ==============================================
Pretty Photo
=============================================== */

	jQuery(document).ready(function(){
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: "light_square",
    });
  });

/* ==============================================
Scroll Navigation
=============================================== */

$(function() {
		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
	});

/* ==============================================
Our Works / isotope Scripts
===============================================	*/

     
 /* ==============================================
Page Loader
=============================================== */

'use strict';

$(window).load(function() {
$(".loader-item02").delay(130).fadeOut();
$("#pageloader02").delay(550).fadeOut("slow");
});

/* ==============================================
Parallax Calling
=============================================== */










/* ==============================================
Carousel Slider
=============================================== */

    $(document).ready(function($) {
		'use strict';
		$(".slide-boxes").owlCarousel();
    });


/* ==============================================
Navigation Menu, Sticky
=============================================== */

	$(window).load(function(){
		'use strict';
		$("#navigation").sticky({ topSpacing: 0 });
    });

/* ==============================================
Load Project
=============================================== */
	$('.carousel').on('slide.bs.carousel', function () {
		'use strict';
		$('.carousel').carousel({
		  interval: 300
		})
	})



 

 

 /* ==============================================
Animated Items
=============================================== */
	jQuery(document).ready(function($) {

	'use strict';

    	$('.animated').appear(function() {
	        var elem = $(this);
	        var animation = elem.data('animation');
	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {

	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);

	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
	    });
});

 /* ==============================================
Revolution Slider
=============================================== */

var revapi;

		jQuery(document).ready(function() {

			   revapi = jQuery('.tp-banner').revolution(
				{
					delay:100,
					startwidth:1170,
					startheight:550,
					hideThumbs:10,
					fullWidth:"on",
					forceFullWidth:"on"
				});

		});	//ready



 /* ==============================================
Revolution Slider Ful Screen
=============================================== */

var revapi;

		jQuery(document).ready(function() {

			   revapi = jQuery('.tp-banner-fs').revolution(
				{
					delay:200,
					startwidth:1170,
					startheight:500,
					hideThumbs:10,
					fullWidth:"off",
					fullScreen:"on",
					fullScreenOffsetContainer: ""
				});

		});	//ready
 /* ==============================================
Fit Videos
=============================================== */
$(window).load(function(){
        $(".fit-vids").fitVids();
    });

 /* ==============================================
Back To Top Button
=============================================== */

$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});



 /* ==============================================
Count Factors
 =============================================== */


		



