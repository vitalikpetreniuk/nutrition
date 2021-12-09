
$(function() {
    // Custom JS
    AOS.init();
    $(window).scroll(function(){
        var sticky = $('header.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 1) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
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
            if ($('.affil-inn').length > 0) {
                $('.affil-inn').addClass('owl-carousel');
                $('.affil-inn img').addClass('item');
                $(".affil-inn").owlCarousel({
                    items: 4,
                    loop: true,
                    nav: false,
                    dots: true,
                    margin: 20,
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
        } else {
            if ($('.trusts').length > 0) {
                $('.trust-inn').removeClass('owl-carousel');
                $('.trust-inn').owlCarousel('destroy');
                $('.trust-inn img').removeClass('item');
            }
            if ($('.affil-inn').length > 0) {
                $('.affil-inn').removeClass('owl-carousel');
                $('.affil-inn').owlCarousel('destroy');
                $('.affil-inn img').removeClass('item');
            }
            if ($('.list-inn.carousel').length > 0) {
                $('.list-inn.carousel').removeClass('owl-carousel');
                $('.list-inn.carousel').owlCarousel('destroy');
            }
        }
    }
    $(window).on('load resize',windowSize);

    $(".sites-list").hover(function () {
        $(this).toggleClass("mouse");
    });
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
});
