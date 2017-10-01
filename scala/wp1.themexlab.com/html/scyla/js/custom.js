/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR MEDI PLUS            ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
1. revolutionSliderActiver
2. slickNavActive
3. accordion
4. clientTestimonial
5. brandCarousel
6. gallerySlider    
7. fancyBox 
8. featuresCarosell 
9. contactFormValidation
****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/




// revolution slider 
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		$("#slider1").revolution({
            dottedOverlay:"yes",
			sliderType:"standard",
			sliderLayout:"auto",
			delay:9000,
            autoHeight:"off",
            shuffle:"on",
            
            
            
			navigation: {
				arrows:{enable:true} 
			}, 
			gridwidth:1170,
			gridheight:750,
		});
	};

}



// Responsive menu 

function slickNavActive () {
    if ($('.navigation').length) {
        $('.navigation').slicknav({
            closedSymbol: '<i class="fa fa-angle-down"></i>',
            openedSymbol: '<i class="fa fa-angle-up"></i>'
        });
    };
}



// Accordion
function accordion () {
    if($('.accordion-box').length){
        $('.accordion-box .acc-btn').on('click', function() {
        if($(this).hasClass('active')!==true){
                $('.accordion-box .acc-btn').removeClass('active');
            }

        if ($(this).next('.acc-content').is(':visible')){
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            }
        else{
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);	
            }
        });
    }
}



// Client Testimonial
function clientTestimonial () {
    if ($('.client-testimonial.owl-carousel').length) {
        $('.client-testimonial.owl-carousel').owlCarousel({
            loop:true,
            dots: false,
            margin:30,
            nav:true,
            navText: [
                    '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
                    '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
                ],
            autoplayHoverPause:false,
            autoplay: 5000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:2
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1100:{
                    items:2
                },
                1200:{
                    items:3
                }

            }
        });    		
    }
}


	
// Brand Carousel
function brandCarousel () {
    if ($('.owl-demo-brand').length) {
        $('.owl-demo-brand').owlCarousel({
            dots: false,
            loop:true,
            margin:20,
            nav:false,
            autoplay: 5000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:4
                },
                1100:{
                    items:5
                }
            }
        });    		
    }
}



// Gallery Slider Carousel 
function gallerySlider () {	
    if ($('.gallery-slider').length) {
        $('.gallery-slider').owlCarousel({
            loop:true,
            margin:8,
            dots: false,
            nav:true,
            navText: [
                    '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
                    '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
                ],
            autoplayHoverPause:true,
            autoplay: 5000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:2
                },
                1024:{
                    items:3
                },
                1100:{
                    items:4
                }
            }
        });    		
    }
}



// Fancybox
function fancyBox () {	
    if($('.fancybox').length) {
        $('.fancybox').fancybox({
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    }
}



// Features Carosell
function featuresCarosell () {	
    if ($('.features-carosell').length) {
        $('.features-carosell').owlCarousel({
            loop:true,
            margin:50,
            dots: false,
            nav:true,
            navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
            autoplayHoverPause:true,
            autoplay: 5000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1100:{
                    items:3
                }
            }
        });    		
    }
}





if ($('.google-map').length) {
    $('.google-map').each(function () {
        // getting options from html 
        var mapName = $(this).attr('id');
        var mapLat = $(this).data('map-lat');
        var mapLng = $(this).data('map-lng');
        var iconPath = $(this).data('icon-path');
        var mapZoom = $(this).data('map-zoom');
        var mapTitle = $(this).data('map-title');

        // if zoom not defined the zoom value will be 15;
        if (!mapZoom) {
            var mapZoom = 15;
        };
        // init map
        var map;
        map = new GMaps({
            div: '#'+mapName,
            scrollwheel: false,
            lat: mapLat,
            lng: mapLng,
            zoom: mapZoom
        });

        // if icon path setted then show marker
        if(iconPath) {
            map.addMarker({
                icon: iconPath,
                lat: mapLat,
                lng: mapLng,
                title: 'Main Head',
                infoWindow: {
                    content: '<h3>Head Office</h3> <span>New York, United Kingdom</span> <p>Call us: +1 800 222 930 120</p>'
                }

            });
        }
    });  
};

if ($('.thm-spinner').length) {
    var spinnerMin = $('.thm-spinner').data('min-value');
    var spinnerMax = $('.thm-spinner').data('max-value');
    var spinnerDefault = $('.thm-spinner').data('default-value');
    $('.thm-spinner').slider({
        range: 'min',
        min: spinnerMin,
        max: spinnerMax,
        value: spinnerDefault,
        slide: function( event, ui ) {
            $( '.vehicle-year' ).val( ui.value );
        }
    });
    $( '.vehicle-year' ).val( $('.thm-spinner').slider('value') );
};

if ($('.select-input').length) {
    $('.select-input').selectmenu();
};
if ($('.date-picker').length) {
    $('.date-picker').datepicker();
};

if ($('ul.special-checkbox').length) {
    $('ul.special-checkbox').find('li').on('click', function () {
        $(this).toggleClass('active');
        // toggling checkbox with click event
        $(this).find('input[type=checkbox]').prop('checked', function(){
            return !this.checked;
        });
    });     
};

//Contact Form Validation
function contactFormValidation () {
    if($('.contact-form').length){
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function (form) { 
                // sending value with ajax request
                var form = $(form);
                $.post(form.attr('action'), form.serialize(), function (response) {
                    form.parent('div').append(response);
                    form.find('input[type="text"]').val('');
                    form.find('input[type="email"]').val('');
                    form.find('textarea').val('');
                });
                return false;
            }
        });
    }
}





// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		revolutionSliderActiver();
        accordion();
        clientTestimonial();
        brandCarousel();
        gallerySlider();
        fancyBox();
        featuresCarosell();
        contactFormValidation();
        slickNavActive();

	})(jQuery);
});


