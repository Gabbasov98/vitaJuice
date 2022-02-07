function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

$(document).ready(function() {
    mainSlider()

    $(".header__burger").click(function() {
        $(".header__menu2").addClass("header__menu2--active")
    })

    $(".header__menu2-close").click(function() {
        $(".header__menu2").removeClass("header__menu2--active")
    })

    $(".header__mob-menu").click(function() {
        $(".header__menu1").addClass("header__menu1--active")
    })

    $(".header__menu1-close").click(function() {
        $(".header__menu1").removeClass("header__menu1--active")
    })


    $(".main .swiper-container").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

})