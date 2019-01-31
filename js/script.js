// $("block-button").onclick(function() {
//   $(this).addClass('.active');

//   });


$(document).ready(function () {
    $(".block-button").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
    });

    $(".search-button").click(function () {
        $(this).addClass("search-active");
    });


    $(".search-button").click(function () {
        if ($(".search").hasClass("search-area")) {
            $(".search").removeClass("search-area");
            $(".search").slideToggle('slow');
        } else {
            $(".search").addClass("search-area");
            $(".search").slideToggle('slow');
            $(".search").css("display", "block");
        }
    });

});


$(".mobile-search").click(function () {
    $(".mobile-search").hide();
    $(".mobile-search-close").fadeIn(200);
    $(".search-mobile").slideToggle('slow');
})

$(".mobile-search-close").click(function () {
    $(".mobile-search-close").hide();
    $(".mobile-search").fadeIn(200);
    $(".search-mobile").slideToggle('slow');
})



//POP-UP

$('.first').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow");

    $('.first-pop-up').fadeIn(500);
    $('.first-pop-up').fadeTo("slow");
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).slideDown(1000);
    $('.first-pop-up').css("display", "flex");
});


$('.pop-one-close').click(function (e) {
    e.preventDefault();
    $('#mask').hide();
    $('.first-pop-up').fadeOut('100');
});
$('#mask').click(function () {
    $(this).hide();
    $('.first-pop-up').fadeOut('100');

});

// choose sex pop up
$(".sex-icon").click(function(){
    $(".active-sex").removeClass("active-sex");
    $(this).addClass("active-sex")
});



//dropdown mobile menu

$(".mobile-menu").click(function(){
    $(".burger-menu").slideToggle('slow');
})

$(".menu-button").click(function(){
    $(".burger-menu").slideToggle('300');
})


// SHOW MORE BUTTON

var content = $(".lose-weight-text");
var button = $(".show-more-button");

button.click(function(){
    if(content.hasClass("open")){
		content.removeClass('open');
		button.text("Rozwij");
	} else {
        content.addClass('open');
        button.text("Zwij");
	}
});

 // FOR SELECTRIC
 $(function () {
    $('select').selectric();
});


// FOR SLIDERS
var mySwiper = new Swiper('.first-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        progressbarOpposite: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.second-slider', {
    autoplay: {
        delay: 100000
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
});

var swiper = new Swiper(".plus-images-slider", {
    direction: 'horizontal',
    spaceBetween: 10,
})


var swiper = new Swiper('.second-slider-mobile', {
    autoplay: {
        delay: 100000
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    width: 228,
});


var swiper = new Swiper('.clients-feedback-content', {
    slidesPerView: 4,
    width:1000,
    autoplay: {
        delay: 3000
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var swiper = new Swiper('.clients-feedback-mobile', {
    slidesPerView: 1,
    width: 300,
    spaceBetween: 10,
    autoplay: {
        delay: 10000
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var swiper = new Swiper('.recipe-slider', {
    // autoplay: {
    //     delay: 3000
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
});