$(document).ready(function() {

    if ($('header').length == 1) {
        $('.land-newfroz-wrapper').addClass('full');
    }

    $('.land-april25-lang a').click(function(e) {
        var curLink = $(this);
        if (!curLink.hasClass('active')) {
            $('.land-april25-lang a.active').removeClass('active');
            curLink.addClass('active');
            var curIndex = $('.land-april25-lang a').index(curLink);
            $('.land-april25-content.active').removeClass('active');
            $('.land-april25-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('.land-april25-block-materials').each(function() {
        var curSlider = $(this);
        new Swiper(curSlider.find('.swiper')[0], {
            slidesPerView: 1,
            loop: 1,
            navigation: {
                nextEl: curSlider.find('.swiper-button-next')[0],
                prevEl: curSlider.find('.swiper-button-prev')[0],
            },
            pagination: {
                el: curSlider.find('.swiper-pagination')[0],
                clickable: true,
            },
            breakpoints: {
                1168: {
                    slidesPerView: 3,
                },
            }
        });
    });

});