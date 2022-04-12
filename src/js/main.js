$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items   : 1,
        autoplay: true,
        loop: true,
autoplayTimeout: 3000
});
});

$('#demoDefaultSelection').ddslick({
    defaultSelectedIndex:2
});


$('.mobile-btn').on('click', function (){
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header__nav').toggleClass('show-menu');
    $('.header__nav-link').toggleClass('show-link');
});


$('.header__nav a').on('click', function (){
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header__nav').removeClass('show-menu');
    $('.header__nav-link').removeClass('show-link');
});
