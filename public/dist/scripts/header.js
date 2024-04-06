(function ($, undefined) {
    const headerOffset = 20;

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
        links.each(function (link) {
            let elementHref = $(this).attr("href").split("./").pop();

            if (currentPage === elementHref) {
                $(this).addClass("active");
                return;
            }
        });
    }

    const indexPage = ["/", "/home", ""];
    let path = window.location.pathname;
    let currentPage = path.split("/").pop();

    const allHeaderLinks = $(".header__item a");
    const allFooterLinks = $(".footer__item a");

    if (indexPage.includes(currentPage)) {
        $(".header__item a").first().addClass("active");
        $(".footer__item a").first().addClass("active");
    } else {
        handleLinks(allHeaderLinks, currentPage);
        handleLinks(allFooterLinks, currentPage);
    }
})(jQuery);
