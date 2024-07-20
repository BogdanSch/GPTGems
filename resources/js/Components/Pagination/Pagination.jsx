import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    const getClassName = (active) => {
        if (active) {
            return "active";
        } else {
            return "";
        }
    };

    const prevLink = links.find((link) => link.label === "&laquo; Previous");
    const nextLink = links.find((link) => link.label === "Next &raquo;");
    const pageLinks = links.filter(
        (link) =>
            link.label !== "&laquo; Previous" && link.label !== "Next &raquo;"
    );

    return (
        <div className="prompts__pagination mt-5">
            {prevLink && prevLink.url && (
                <Link
                    className="btn btn-outline-pagination"
                    href={prevLink.url}
                >
                    Previous
                </Link>
            )}

            {pageLinks.map((link, key) =>
                link.url === null ? (
                    <div className="pagination__link disabled" key={key}>
                        {link.label}
                    </div>
                ) : (
                    <Link
                        className={`${getClassName(
                            link.active
                        )} pagination__link`}
                        href={link.url}
                        key={key}
                    >
                        {link.label}
                    </Link>
                )
            )}

            {nextLink && nextLink.url && (
                <Link
                    className="btn btn-outline-pagination"
                    href={nextLink.url}
                >
                    Next
                </Link>
            )}
        </div>
    );
}
