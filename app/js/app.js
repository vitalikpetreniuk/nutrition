
$(function() {
    $(window).scroll(function(){
        var sticky = $('header.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 1) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
	// Custom JS
    $(".slider-main .slider").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 18,
        responsive: {
            0: {
                items: 1
            },
            762:{
                items:2
            },
            992: {
                item:3
            }
        }
    });
    $(".testimonials .slider").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        loop: true,
        autoplayTimeout: 6000
    });
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    $(".btn-mob").on("click", function (){
        $("body").toggleClass("fixed");
        $("html").toggleClass("fixed");
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
    $(".acordion .item .heading").on("click", function (){
        $(this).toggleClass("active");
        $(this).siblings(".text").slideToggle();
    });
    function windowSize(){
        if ($(window).width() <= '992'){
            $(".sub > a").on("click", function (event){
                event.preventDefault();
                $(".sub").not($(this).parent(".sub")).removeClass("active");
                $(this).parent(".sub").toggleClass("active");
            });
            if ($('.trusts').length > 0) {
                $('.trust-inn').addClass('owl-carousel');
                $('.trust-inn img').addClass('item');
                $(".trust-inn").owlCarousel({
                    items: 4,
                    loop: false,
                    nav: false,
                    dots: true,
                    dotsEach: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        762: {
                            items: 4
                        }
                    }
                });
            }
            if ($('.list-inn.carousel').length > 0) {
                $('.list-inn.carousel').addClass('owl-carousel');
                $(".list-inn.carousel").owlCarousel({
                    items: 1,
                    loop: false,
                    nav: true,
                    dots: false
                });
            }
        } else {
            if ($('.trusts').length > 0) {
                $('.trust-inn').removeClass('owl-carousel');
                $('.trust-inn').owlCarousel('destroy');
                $('.trust-inn img').removeClass('item');
            }
            if ($('.list-inn.carousel').length > 0) {
                $('.list-inn.carousel').removeClass('owl-carousel');
                $('.list-inn.carousel').owlCarousel('destroy');
            }
        }
    }
    $(window).on('load resize',windowSize);
    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(300);

                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(300);
            }
        });
    });

    $(".sites-list").hover(function () {
        $(this).toggleClass("mouse");
    });
});
