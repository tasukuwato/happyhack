$(function($){
    $('.bg-switcher').bgSwitcher({
        images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop: true, 
    });

    $('.slider').slick({
        autoplay: false,
        dots: true,
        arrows: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024, // 1023px以下のサイズに適用
                settings: {
                slidesToShow: 3,
                },
            },
            {
                breakpoint: 821, // 820px以下のサイズに適用
                settings: {
                slidesToShow: 2,
                },
            },
            {
                breakpoint: 414, // 〜414px以下のサイズに適用
                settings: {
                slidesToShow: 1,
                },
            },
        ],
    });
});