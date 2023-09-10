

/* ============================================================ */
/* PRODUCT COLOR VARIANT
/* ============================================================ */
// const setActive = el => {
//     [...el.parentElement.children].forEach(sib => sib.classList.remove('active'))
//     el.classList.add('active')
// }
// let spans = [...document.body.querySelectorAll('.color-variation ul li')]
// spans.forEach(el => el.addEventListener('click', e => setActive(el)));


(function ($) {
    "use strict";

    // header Sticky Function
    window.onscroll = function() {
        stickyHeader()
    };
    var header = document.getElementById("headerSticky");
    var sticky = header.offsetTop;
    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


    // Hero Swiper slider
    const heroSlider = new Swiper('.hero-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        // autoplay: {
        //     delay: 5000,
        // },

    });

    // Product Swiper Slider
    const swiper = new Swiper('.categorised_product_slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
        speed: 500,
        // autoplay: {
        //     delay: 3000,
        // },
        breakpoints: {
        576: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 25,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.categorised_product_slider .swiper-next',
            prevEl: '.categorised_product_slider .swiper-prev',
        },
    });

    function product_filter_sidebar(selector, actionSelector) {
        var product_filter_sidebar = $(selector);
        product_filter_sidebar.on("click", function() {
            $(selector).toggleClass('visible_sidebar');
        });
        
        var hamburgerbtn = $(selector);
        hamburgerbtn.on("click", function() {
            $(actionSelector).toggleClass('visible_sidebar');
        });

        $(document).on('click', function(e) {
            var selectorType = $(actionSelector).add(product_filter_sidebar);
            if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                $(actionSelector).removeClass("visible_sidebar");
                $(selector).removeClass("visible_sidebar");
            }          
        });
    
    };
    product_filter_sidebar('.toggle-filter-sidebar, .product-filter .close-sidebar', '.product-filter .product-filter-sidebar');


    // jQuery Nice Select
    var niceSelect = $('.nice-select');
    if (niceSelect.length) {
        $('.nice-select').niceSelect();
    };

    $('.color-variation ul').on('click', 'li', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

    /* ============================================================ */
	/* PRODUCT DETAILS CUSTOMER REVIEW RATING STAR
	/* ============================================================ */
	$(document).ready(function() {
		// Visualizing things on Hover
		$('.rating-stars li').on('mouseover', function() {
			var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
			// Now highlight all the stars that's not after the current hovered star
			$(this).parent().children('li.star').each(function(e) {
				if (e < onStar) {
					$(this).addClass('hover');
				} else {
					$(this).removeClass('hover');
				}
			});
		}).on('mouseout', function() {
			$(this).parent().children('li.star').each(function(e) {
				$(this).removeClass('hover');
			});
		});
		// Action to perform on click 
		$('.rating-stars li').on('click', function() {
			var onStar = parseInt($(this).data('value'), 10); // The star currently selected
			var stars = $(this).parent().children('li.star');

			for (var i = 0; i < stars.length; i++) {
				$(stars[i]).removeClass('selected');
			}

			for (var i = 0; i < onStar; i++) {
				$(stars[i]).addClass('selected');
			}
		});
	});

    $(".xzoom, .xzoom-gallery").xzoom({
        Xoffset: 15,
    });

})(jQuery);