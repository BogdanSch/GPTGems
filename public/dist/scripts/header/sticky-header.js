const stickyHeader = () => {
    const header = $(".header");

    function applyStickyHeader() {
        if (window.scrollY > 0) {
            header.addClass("sticky");
        } else {
            if (header.hasClass("sticky")) {
                header.removeClass("sticky");
            }
        }
    }

    (function ($, undefined) {
        applyStickyHeader();
        $(window).on("scroll", applyStickyHeader);
    })(jQuery);
};

export default stickyHeader;
