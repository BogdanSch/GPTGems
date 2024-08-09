import React from "react";
import { usePage } from "@inertiajs/react";

export default function FlashMessage() {
    const { flash } = usePage().props;
    return (
        flash.message && (
            <section
                className="message"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
            >
                <div className="container">
                    <div className="message__wrap">
                        <div
                            className="alert alert-success mt-2 text-center"
                            role="alert"
                        >
                            {flash.message}
                        </div>
                    </div>
                </div>
            </section>
        )
    );
}
