const headerOffset = 30;

(function ($, undefined) {
    $(window).on("scroll", function () {
        const header = $(".header");
        if (window.scrollY >= headerOffset) {
            header.addClass("sticky");
        } else {
            if (header.hasClass("sticky")) {
                header.removeClass("sticky");
            }
        }
    });

    $(".header__burger").click(function (event) {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });

    function handleLinks(links, currentPage) {
        links.each(function () {
            const link = $(this);
            const elementHref = link.attr("href").split("/").pop();
            // console.log(currentPage === elementHref);
            console.log(link);

            if (currentPage === elementHref) {
                link.addClass("active");
            } else {
                if (link.hasClass("active")) {
                    link.removeClass("active");
                }
            }
        });
    }

    const indexPage = ["/", "/home", ""];
    let path = window.location.pathname;
    let currentPage = path.split("/").pop();

    const allHeaderLinks = $(".header__item a");
    const allFooterLinks = $(".footer__item a");

    if (indexPage.includes(currentPage)) {
        $(".header__list .header__item a").first().addClass("active");
        $(".footer__list .footer__item a").first().addClass("active");
    } else {
        handleLinks(allHeaderLinks, currentPage);
        handleLinks(allFooterLinks, currentPage);
    }
})(jQuery);
