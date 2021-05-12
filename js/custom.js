$(function() {

    $('.color-icon').on('click', function(){
        $('.color-picker').toggleClass('colorpos')
            });

    $('.color-picker ul .blue').on('click', function(){
        $('body').addClass('blue').removeClass('green').removeClass('orange').removeClass('purple');
    });

    $('.color-picker ul .green').on('click', function(){
        $('body').addClass('green').removeClass('blue').removeClass('purple').removeClass('orange')
    });
    $('.color-picker ul .purple').on('click', function(){
        $('body').addClass('purple').removeClass('blue').removeClass('green').removeClass('orange');
    });
    $('.color-picker ul .orange').on('click', function(){
        $('body').addClass('orange').removeClass('blue').removeClass('green').removeClass('purple');
    });
    
    
     $('.color-picker ul .default').on('click', function(){
        $('body').addClass('default').removeClass('green').removeClass('blue').removeClass('orange').removeClass('purple');
    });

    // active class in navbar

    $('.navbar .nav-item').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // banner slider;
    $('.banner_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // about video pop up;
    $('.venobox').venobox({
        overlayColor: 'rgba(0, 0, 0, 0.6)',
    });

    // testimonial slider;

    $('.feedback-slider').slick({
        arrows: false,
        slidesToShow: 2,
        dots: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ],
    });

    //  counter;

    $('.counter1').counterUp({
        time: 3000,
    });

    // brand slider;
    $('.brand-slider').slick({
        slidesToShow: 5,
        prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="slick-prev next-arrow fas fa-chevron-right"></i>',
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },

            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
        ],
    });
});