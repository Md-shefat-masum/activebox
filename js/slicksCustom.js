$(document).ready(function () {

    //    slick slider
    $('.textslide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        preview: true,
        //vertical: true,
        nextArrow: ".slidNext",
        prevArrow: '.slidPrv',
        swipe: true,
        //cssEase: 'ease',
        easing: 'linear',

    });


});
