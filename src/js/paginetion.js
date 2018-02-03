$(document).ready(function () {
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('.pagination a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');

        var target = this.hash,
            menu = target,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    $('.scroll-to-bottom a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');

        var target = this.hash,
            menu = target,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.pagination a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - 200 <= scrollPos && refElement.position().top + refElement.height()> scrollPos) {
                $('.pagination li a').removeClass("active");
                currLink.addClass("active");
                console.log(currLink.attr("href"));
                $(currLink.attr("href")).addClass('active-section scroled');
            }
            else {
                $(currLink.attr("href")).removeClass('active-section');

            }

            var windowHeight = $(window).height()/2;
            if (refElement.position().top - windowHeight <= scrollPos && refElement.position().top + refElement.height()> scrollPos) {
                $(currLink.attr("href")).addClass('pagi');
            }
            else {
                $(currLink.attr("href")).removeClass('pagi');

            }
        });
    }
}($));