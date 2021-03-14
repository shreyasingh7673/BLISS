$(document).ready(function () {
	$(".fabtheme-owl-1").owlCarousel({
		autoWidth: false,
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
});
$(document).ready(function(){
	$(".fabtheme-owl-2").owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 1,
				nav: true
			},
			992: {
				items: 3,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}
		}
	});
	var owl = $('.owl-carousel');
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
});
/* END OF OWL CAROUSEL */
/* COUNTER UP */
$(document).ready(function () {
	$('.fabtheme-counter-up').counterUp({
		delay: 10,
		time: 5000,
		offset: 100,
		beginAt: 0,
		formatter: function (n) {
			return n.replace(/,/g, '.');
		}
	});
});
/* END OF COUNTER UP */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#fabtheme-navbar').addClass('solid');
	    } else {
	        $('#fabtheme-navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#fabtheme-navbar').hide();
	    }
	    else{
	    	$('#fabtheme-navbar').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* SCROLL TOP */
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.fabtheme-scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.fabtheme-scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){
	$(".fabtheme-scroll").click(function(){
		$("html,body").animate({
			scrollTop:$(".fabtheme-thetop").offset().top - 0
		},3000, 'easeInOutExpo');
		return false;
	})
});