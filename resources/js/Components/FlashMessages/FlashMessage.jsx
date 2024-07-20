import React from "react";
import { usePage } from "@inertiajs/react";

export default function FlashMessage() {
    const { flash } = usePage().props;
    return (
        flash.message && (
            <section className="message">
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
