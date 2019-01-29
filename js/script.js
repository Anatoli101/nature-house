// $("block_button").onclick(function() {
//   $(this).addClass('.active');

//   });


$(document).ready(function () {
    $(".block_button").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
    });

    $(".search_button").click(function () {
        $(this).addClass("search-active");
    });


    $(".search_button").click(function () {
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