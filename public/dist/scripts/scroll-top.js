"use strict";

(function ($, undefined) {
    const scrollTopElement = $(".scroll-top");
    const screenOffset = 100;

    console.log(scrollTopElement);
    $(window).on("scroll", function () {
        if (window.scrollY >= screenOffset) {
            scrollTopElement.addClass("active");
        } else {
            if (scrollTopElement.hasClass("active")) {
                scrollTopElement.toggleClass("active");
            }
        }
    });
})(jQuery);
