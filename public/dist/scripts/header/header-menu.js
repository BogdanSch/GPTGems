const headerMenu = () => {
    const indexPagePathes = ["/", "/home", ""];
    (function ($, undefined) {
        $(".header__burger").click(function (event) {
            $(".header__burger, .header__menu").toggleClass("active");
            $("body").toggleClass("lock");
        });

        function handleLinks(links, currentPage) {
            links.each(function () {
                const link = $(this);
                const elementHref = link.attr("href").split("/").pop();

                if (currentPage === elementHref) {
                    link.addClass("active");
                } else {
                    if (link.hasClass("active")) {
                        link.removeClass("active");
                    }
                }
            });
        }

        let path = window.location.pathname;
        const allHeaderLinks = $(".header__list .header__item a");
        const allFooterLinks = $(".footer__list .footer__item a");

        if (path.split("/").includes("prompts")) {
            handleLinks(allHeaderLinks, "prompts");
            handleLinks(allFooterLinks, "prompts");
        } else {
            let currentPage = path.split("/").pop();

            if (indexPagePathes.includes(currentPage)) {
                allHeaderLinks.first().addClass("active");
                allFooterLinks.first().addClass("active");
            } else {
                handleLinks(allHeaderLinks, currentPage);
                handleLinks(allFooterLinks, currentPage);
            }
        }
    })(jQuery);
};
export default headerMenu;
