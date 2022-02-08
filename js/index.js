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

function hitSlider() {
    var swiper = new Swiper('.hits .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.hits .swiper-button-next',
            prevEl: '.hits .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    })
}

$(document).ready(function() {
    mainSlider()
    hitSlider()
    cartCalc()

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

    $(".card__favourite").click(function() {
        $(this).toggleClass("card__favourite--active")
    })

    $(".product__favourite").click(function() {
        $(this).toggleClass("product__favourite--active")
    })
    $(".card__btn").click(function() {
        $("#modalProduct").modal('show')
    })

    $(".cart__form-info").click(function() {
        $(".cart__form-hint").toggleClass("cart__form-hint--active")
    })

    $(".lk__form-info").click(function() {
        $(".lk__form-hint").toggleClass("lk__form-hint--active")
    })
})

function cartCalc() {
    $('.cartcalc .ccalc-minus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.cartcalc').find('input').val(b);
        } else {
            $(this).closest('.cartcalc').find('input').val(a);
        }
    });
    $('.cartcalc .ccalc-plus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.cartcalc').find('input').val(b);
    });
}