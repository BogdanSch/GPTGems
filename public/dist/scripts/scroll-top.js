"use strict";

const scrollTopElement = $(".scroll-top");
const screenOffset = 100;

(function ($, undefined) {
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
