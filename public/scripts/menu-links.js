
"use strict";

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