"use strict";
$(document).ready(function() {





    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
       L2 Tesimonial slider
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".l2-testimonial-slider").length > 0) {
        $(".l2-testimonial-slider").slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            cssEase: 'linear',
            responsive: [{
                breakpoint: 768,
                settings: {
                    vertical: true
                },
            }, ],
        });
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
        Bootstrap Mobile Megamenu Support
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
        if (!$(this).next().hasClass("show")) {
            $(this)
                .parents(".dropdown-menu")
                .first()
                .find(".show")
                .removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass("show");

        $(this)
            .parents("li.nav-item.dropdown.show")
            .on("hidden.bs.dropdown", function(e) {
                $(".dropdown-submenu .show").removeClass("show");
            });

        return false;
    });
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Prcing Dynamic Script
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $("[data-pricing-trigger]").on("click", function(e) {
        $(e.target).addClass("active").siblings().removeClass("active");
        var target = $(e.target).attr("data-target");
        console.log($(target).attr("data-value-active") == "monthly");
        if ($(target).attr("data-value-active") == "monthly") {
            $(target).attr("data-value-active", "yearly");
        } else {
            $(target).attr("data-value-active", "monthly");
        }
    });


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
      Counter Up Activation
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
$('.counter').counterUp({
    delay: 10,
    time: 2000
});


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
      Home-1 testimonial  Slider 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


var slickImgslide = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    asNavFor: '.testimonial-text-slider',
    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
    fade: true,
    cssEase: 'linear'
}
var slickContentslide = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    asNavFor: '.testimonial-image-slider',
    adaptiveHeight: false,
    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
    fade: true,
    cssEase: 'linear'
}

$('.testimonial-image-slider').slick(slickImgslide);
$('.testimonial-text-slider').slick(slickContentslide);

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
      Home-4- testimonial  Slider 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
var slickContentslide = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    asNavFor: '.l4-testimonial-image-slider',
    adaptiveHeight: false,
    prevArrow: $('.prev3'),
    nextArrow: $('.next3'),
    fade: true,
    cssEase: 'linear'
}

var slickImgslide2 = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    asNavFor: '.l4-testimonial-text-slider',
    prevArrow: $('.prev3'),
    nextArrow: $('.next3'),
    fade: true,
    cssEase: 'linear'
}


$('.l4-testimonial-image-slider').slick(slickImgslide2);
$('.l4-testimonial-text-slider').slick(slickContentslide);


/*l4 Testimonial slider button active*/

$(document).ready(function() {
    $('.next-prev-btn3 span').click(function() {
        $('.next-prev-btn3 span').removeClass("active");
        $(this).addClass("active");
    });
});



/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
      Preloader Activation
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


$(window).load(function() {
    setTimeout(function() {
        $("#loading").fadeOut(500);
    }, 1000);
    setTimeout(function() {
        $("#loading").remove();
    }, 2000);
});