import "../sass/main.sass";
// import 'jquery';
import '../libs/scrollify-master/jquery.scrollify';
import '../libs/bx-slider/jquery.bxslider.min';
import '../libs/scrollify-master/jquery.scrollify';
// import '../libs/magnific-popup/jquery.magnific-popup';
import '../js/paginetion.js';
import sliderBg1 from '../img/images-hd/home/slider-1.jpg';
import quimicosBg1 from '../img/instalaciones-1.jpg';
import quimicosBg2 from '../img/instalaciones-2.jpg';
import salesBg1 from '../img/sales-1.jpg';
import salesBg2 from '../img/sales-2.jpg';
import fosfatosBg1 from '../img/OQUENDO-I.jpg';
import fosfatosBg2 from '../img/OQUENDO-II.jpg';
import sliderBg2 from '../img/images-hd/slider/img-fosfatos.jpg';
import next from '../img/next.svg';
import back from '../img/back.svg';
import sliderBg3 from '../img/images-hd/slider/img-quimico.jpg';
import sliderBg4 from '../img/images-hd/slider/sales---quimpac.jpg';
import svg1 from '../img/svg/Estruc-Operaciones/Estruc-QUIMICOS.svg';
//Home slider
$(document).ready(function () {

    //Sub menu
    let subMenuItem = document.querySelectorAll('.main-menu li>ul');
    subMenuItem.forEach(subItem => { subItem.parentElement.classList.add('sub-menu'); });
    
    //Home circle
    
    if (document.querySelector('body').classList.contains('quines-hacemos')) {
        document.querySelector('.quines-hacemos').classList.add('quines-hacemos-circle');
    }
    if (document.querySelector('section').classList.contains('home')) {
        document.querySelector('body .home').classList.add('home-circle');
    }
    


    //Header search
    // document.querySelector('.search').addEventListener('click', showSearch);
    // function showSearch (e) {
    //     let searchInput = document.querySelector('.header-input-filds input[type="search"]');
    //     console.log(searchInput);
    // }

    //Slider home-page
    $('.slider').bxSlider({
        // mode: 'vertical',
        hideControlOnEnd: true,
        controls: false
    });
    //Slider prodact
    $('.right-main-photo').bxSlider({
        mode: 'fade',
        hideControlOnEnd: true,
        controls: false,
        maxSlides: 1,
        pagerCustom: '.left-photo-pag',
    });
    $('.prodact-tab-content').bxSlider({
        mode: 'fade',
        hideControlOnEnd: true,
        controls: false,
        maxSlides: 1,
        pagerCustom: '.prodact-tabs-header',
        adaptiveHeight: true
    });

    // Data Text for slider dots//Need edit
    // let dataSliderText = document.querySelectorAll('.home-slider-item');
    // dataSliderText.forEach((sliderTextItem, i) => {
    //     let styleElem = document.head.appendChild(document.createElement("style"));
    //     let txt = sliderTextItem.dataset.text;
    //     styleElem.innerHTML = ".bx-wrapper .bx-pager .bx-pager-item:nth-child(" + i + ") a::after {content: '" + txt + "'};";
    // });

    //Date slider
    $('.main-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        pagerCustom: '.main-slider-pager',
        infiniteLoop: false,
        controls: false,
        adaptiveHeight: true,
        onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            $('.main-slider .active-slide').removeClass('active-slide');
            $('.main-slider > div').eq(currentSlideHtmlObject + 0).addClass('active-slide');
        },
        onSliderLoad: function (currentIndex) {
            $('.main-slider > div').eq(0).addClass('active-slide');
        },
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            var sub_slide_height = $('.main-slider .active-slide .bx-viewport').height();
            $('.years-slider-section .right-slider > .bx-wrapper > .bx-viewport').css('min-height', sub_slide_height+($(window).height()*0.1));
        }
    });
    $('#inside-slider-1').bxSlider({
        mode: 'vertical',
        touchEnabled: false,
        pagerCustom: '#inside-slider-1-pager',
        infiniteLoop: false,
        controls: false,
        adaptiveHeight: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            var sub_slide_height = $('.main-slider .active-slide .bx-viewport').height();
            $('.years-slider-section .right-slider > .bx-wrapper > .bx-viewport').css('min-height', sub_slide_height+($(window).height()*0.1));
        }
    });
    $('#inside-slider-2').bxSlider({
        mode: 'vertical',
        touchEnabled: false,
        pagerCustom: '#inside-slider-2-pager',
        infiniteLoop: false,
        controls: false,
        adaptiveHeight: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            var sub_slide_height = $('.main-slider .active-slide .bx-viewport').height();
            $('.years-slider-section .right-slider > .bx-wrapper > .bx-viewport').css('min-height', sub_slide_height+($(window).height()*0.1));
        }
    });
    $('#inside-slider-3').bxSlider({
        mode: 'vertical',
        touchEnabled: false,
        pagerCustom: '#inside-slider-3-pager',
        infiniteLoop: false,
        controls: false,
        adaptiveHeight: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            var sub_slide_height = $('.main-slider .active-slide .bx-viewport').height();
            $('.years-slider-section .right-slider > .bx-wrapper > .bx-viewport').css('min-height', sub_slide_height+($(window).height()*0.1));
        }
    });
    $('#inside-slider-4').bxSlider({
        mode: 'vertical',
        touchEnabled: false,
        pagerCustom: '#inside-slider-4-pager',
        infiniteLoop: false,
        controls: false,
        adaptiveHeight: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            var sub_slide_height = $('.main-slider .active-slide .bx-viewport').height();
            $('.years-slider-section .right-slider > .bx-wrapper > .bx-viewport').css('min-height', sub_slide_height+($(window).height()*0.1));
        }
    });
    $('#inside-slider-5').bxSlider({
        mode: 'vertical',
        touchEnabled: false,
        pagerCustom: '#inside-slider-5-pager',
        infiniteLoop: false,
        controls: false,
        adaptiveHeight: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            var sub_slide_height = $('.main-slider .active-slide .bx-viewport').height();
            $('.years-slider-section .right-slider > .bx-wrapper > .bx-viewport').css('min-height', sub_slide_height+($(window).height()*0.1));
        }
    });
    $('#inside-slider-6').bxSlider({
        mode: 'vertical',
        touchEnabled: false,
        pagerCustom: '#inside-slider-6-pager',
        infiniteLoop: false,
        controls: false,
        adaptiveHeight: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            var sub_slide_height = $('.main-slider .active-slide .bx-viewport').height();
            $('.years-slider-section .right-slider > .bx-wrapper > .bx-viewport').css('min-height', sub_slide_height+($(window).height()*0.1));
        }
    });


    //Accordion---------
    var accItem = document.querySelectorAll('.accordion-wrapper .accordion-item');
    // console.log(accItem);
    accItem.forEach((i) => {
        i.addEventListener('click', accordionClick);
    });

    function accord_right_hg() {
        var right_accord_content = $('.quimicos .accordion-wrapper .active .content')[0];
        var right_height;

        if(right_accord_content)
            right_height = right_accord_content.clientHeight;
        else
            right_height = 0;

        $('.quimicos .accordion-wrapper').css('min-height', right_height+20);
    }

    //Accordion Function
    function accordionClick(e){

        if (e.target.classList.contains('title')) {
            if (e.target.parentElement.classList.contains('active')) {
                e.target.parentElement.classList.remove('active');


                document.querySelectorAll('.accordion-wrapper .accordion-item-wrapper .content').forEach((i) => {
                    i.style.height = 0;
                });


            } else {
                document.querySelectorAll('.accordion-wrapper .accordion-item').forEach((i) => {
                    if (i.classList.contains('active')) {
                        i.classList.remove('active');
                    }
                });
                e.target.parentElement.classList.add('active');

                document.querySelectorAll('.accordion-wrapper .accordion-item-wrapper .content').forEach((i) => {
                    i.style.height = 0;
                });

                document.querySelectorAll('.accordion-wrapper .accordion-item-wrapper .active .content').forEach((i) => {
                    i.style.height = i.children[0].clientHeight * i.children.length + 'px';
                    setTimeout(i.style.height = 'auto');
                });

                }
            }

        accord_right_hg();

    }
    accord_right_hg();


    $('.talento .content-list-item').click(function () {

        if(!$(this).hasClass('no_arrow'))
            if($(this).hasClass('active')) {
                $('ul', this).slideUp();
                $(this).removeClass('active');
             } else {
                $('.content-list-item ul').slideUp();
                $('.content-list-item').removeClass('active');
                $('ul', this).slideDown();
                $(this).addClass('active');
            }

    });

    //certificacion-tab
    // let leftTab = document.querySelector('.left-tab');
    // let rightTab = document.querySelector('.right-tab');
    // document.querySelectorAll('.tab-header span').forEach((i) => {
    //     i.addEventListener('click', certificacionFunction);
    // });
    // function certificacionFunction(e){
    //     document.querySelector('.tab-header .active').classList.remove('active');
    //     e.target.classList.add('active');
    //     if (leftTab.classList.contains('active')) {

    //         document.querySelector('.first-tab').classList.add('tab-active');
    //         document.querySelector('.second-tab').classList.remove('tab-active');
    //     }
    //     if (rightTab.classList.contains('active')) {
    //         document.querySelector('.second-tab').classList.add('tab-active');
    //         document.querySelector('.first-tab').classList.remove('tab-active');

    //     }
    // }


    //Popup---------
    document.querySelectorAll('.popup-modal').forEach((i) => {
        i.addEventListener('click', openPopup);
        // console.log(i);
    });
    function openPopup(e) {
        e.preventDefault();
        // console.log(e.target);
        if (e.target.classList.contains('popup-modal')){
            var popupId = e.target.getAttribute('href');
        } 
        else  {
            var popupId = e.target.parentElement.getAttribute('href');
        }
        
        // console.log(popupId);
        document.querySelector(popupId).style.display = 'block';
        // $.scrollify.disable();
        document.querySelector(popupId + ' .popup-dismiss').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector(popupId).style.display = 'none';
        });
        $('.popup-dismiss').click(function () {
            document.querySelector(popupId).style.display = 'none';
        });
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                e.preventDefault();
                document.querySelector(popupId).style.display = 'none';
                // $.scrollify.enable();
            }
        });
        document.querySelector(popupId + ' .popup-wrapper').addEventListener('click', function(e){
            if (!e.target.parentElement.classList.contains('popup-content') && !e.target.classList.contains('popup-call')) {
                document.querySelector(popupId).style.display = 'none';

            }
        });
        document.querySelector('body').addEventListener('keypress', function(e){
            if (!e.target.parentElement.classList.contains('popup-content') && (e.keyCode == 27 || e.keyCode == 32)){
                document.querySelector(popupId).style.display = 'none';
                $.scrollify.enable();
            }
        });
    }

     // Select
    function selectInput(e) {
        let value = e.target.value;
        document.querySelector('.select-value').innerHTML = value;
        let select = document.querySelector('.select');
        select.style.display = 'none';
        select.parentElement.classList.remove('active-select');
    }

    if (document.querySelector('section').classList.contains('contactaons')) {
            document.querySelector('.select-value').addEventListener('click', function (e) {
            let select = document.querySelector('.select');
            select.style.display = 'block';
            e.target.parentElement.classList.add('active-select');

            select.querySelectorAll('input').forEach((inp) => {
                inp.addEventListener('change', selectInput);
            });
        });
    }
    if (document.querySelector('body').classList.contains('talento')) {
            document.querySelector('.select-value').addEventListener('click', function (e) {
            let select = document.querySelector('.select');
            select.style.display = 'block';
            e.target.parentElement.classList.add('active-select');

            select.querySelectorAll('input').forEach((inp) => {
                inp.addEventListener('change', selectInput);
            });
        });
    }
    
    //Home resp
    function removeAttrAll(attr) {
        if ($(window).width() > 575) {
            $(attr).each(function () {
                var attributes = this.attributes;
                var i = attributes.length;
                while (i--) {
                    this.removeAttributeNode(attributes[i]);
                }
            })
        }
    }
    removeAttrAll('.memoria');


    /* === begin Product Slider === */

    var len = $('.prodacts-item-row .prodact-item').length;
    var product_slider_config = {
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 300,
        startSlide: 0,
        infiniteLoop: true,
        pager: false,
        onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            $('.active-slide').removeClass('active-slide');
            $('.prodacts-item-row > div').eq(currentSlideHtmlObject + 4).addClass('active-slide');

            $('.counter span:first-child').text(currentSlideHtmlObject + 1);

            $('.counter span:last-child').text(len);

            $('.presentacion_slider > div').removeClass('active');
            $('.presentacion_slider > div:nth-child(' + (currentSlideHtmlObject + 1) + ')').addClass('active');
        },
        onSliderLoad: function (currentIndex) {
            $('.prodacts-item-row > div').eq(4).addClass('active-slide');

            $('.counter span:first-child').text(currentIndex + 1);
            $('.counter span:last-child').text(len);
        },

    };

    var productSlider;
    if($('#bx_product_mobile')[0] && $(window).width() <= 575) {
        productSlider = $('#bx_product_mobile').bxSlider(product_slider_config);
    }
    function resize_el() {

        if($(window).width() > 575) {
            if(productSlider)
                productSlider.destroySlider();
        } else {
            if(!productSlider && $('#bx_product_mobile')[0]) {
                productSlider = $('#bx_product_mobile').bxSlider(product_slider_config);
            }
            if(productSlider)
                productSlider.reloadSlider(product_slider_config);
        }

    }
    resize_el();

    /* === end Product Slider === */

    /* === begin Accordeon Slider === */

    var accordeon_slider_config = {
        minSlides: 2,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 230,
        infiniteLoop: false,
        pager: false
    };

    var accordeonSlider;
    // if($('#accordion-slider')[0]) {
    //     accordeonSlider = $('#accordion-slider').bxSlider(accordeon_slider_config);
    // }
    function accordion_slider() {

        if($(window).width() < 992) {
            if(accordeonSlider)
                accordeonSlider.reloadSlider(accordeon_slider_config);
        } else {
            if(accordeonSlider)
                accordeonSlider.destroySlider();
        }
    }
    accordion_slider();

    /* === end Accordeon Slider === */

    var testimoniusSlider;
    if($('.testimonius_slider').length)
    testimoniusSlider = $('.testimonius_slider').bxSlider({
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 600,
        startSlide: 0,
        auto: true,
        controls: true,
        nextText: "<img src='img/next.svg' >",
        prevText: "<img src='img/back.svg' >",
        autoStart: true,
        autoplay: true,
        infiniteLoop: true,
        pager: false,
        onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            $('.active-slide').removeClass('active-slide');
            $('.testimonius_slider > div').eq(currentSlideHtmlObject + 7).addClass('active-slide');
        },
        onSliderLoad: function (currentIndex) {
            $('.testimonius_slider > div').eq(7).addClass('active-slide');
        },

    });

    var certificateSlider = $('#certificateSlider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        auto: true,
        controls: true,
        infiniteLoop: true,
        pager: true
    });

    var year_dots_config = {
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        controls: true,
        nextText: "<img src='../img/next.svg' >",
        prevText: "<img src='../img/back.svg' >",
        slideWidth: 140,
        infiniteLoop: false,
        pager: false,
    };

    var year_dots;
    if($('.year_dots').length)
        year_dots = $('.year_dots').bxSlider(year_dots_config);

    function resize_year_dots() {

        if($(window).width() > 575) {
            if(year_dots)
                year_dots.destroySlider();
        } else {
            if(year_dots)
                year_dots.reloadSlider(year_dots_config);
        }

    }
    resize_year_dots();


    $(window).resize(function () {

        resize_el();
        accordion_slider();
        resize_year_dots();
        accord_right_hg();
        if(testimoniusSlider)
            testimoniusSlider.reloadSlider();

    });


    var width = 100,
        perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = parseInt((EstimatedTime/1000)%60)*100;

    $(".loadbar").animate({
        width: width + "%"
    }, time);

    setTimeout(function(){
        $('.preloader').fadeOut(300);
    }, time);

    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
        $('.top_menu_wrapper').fadeToggle('slow');
        $('.header').toggleClass('mobile-menu-opened');
    });

    $('.sub-menu').click(function () {
        $('.sub-menu ul').slideUp();
        if (!$(this).hasClass('active')) {
            $('.sub-menu').removeClass('active');
            $(this).addClass('active');
            $('ul', this).slideDown();
            $('.main-menu').addClass('opened');
        } else {
            $(this).removeClass('active');
            $('ul', this).slideUp();
            $('.main-menu').removeClass('opened');

        }
    });



    var body = document.querySelector('body');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0){
            document.querySelector('.header').classList.add('onscroll');
            document.querySelector('.header').classList.add('white_header');
        } else {
            document.querySelector('.header').classList.remove('onscroll');
        }
        if (body.classList.contains('nuesta_empresa')) {
            if (document.querySelector('.years-slider-section').classList.contains('active-section')){
                document.querySelector('.pagination').style.display ='none';
            } else {
                document.querySelector('.pagination').style.display = 'block';
            }
            
        }

        var id_light = false;
        document.querySelectorAll('.lite-section').forEach(item => {
            if(item.classList.contains('active-section')) {
                id_light = true;
            }
        });

        if(!id_light)
            document.querySelector('.header').classList.add('white_header');
        else
            document.querySelector('.header').classList.remove('white_header');

        var id_light2 = false;
        document.querySelectorAll('.lite-section').forEach(item => {
            if(item.classList.contains('pagi')) {
                id_light2 = true;
            }
        });

        if(id_light2)
            document.querySelector('.pagination').classList.add('black');
        else
            document.querySelector('.pagination').classList.remove('black');

    });

    resize_el();

});