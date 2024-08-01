import React, { useEffect, useRef } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function Modal({ id, title, children, showModal, hideModal }) {
    const modalRef = useRef(null);
    const modalInstanceRef = useRef(null);

    useEffect(() => {
        if (modalRef.current) {
            modalInstanceRef.current = new bootstrap.Modal(modalRef.current);
            if (showModal) {
                modalInstanceRef.current.show();
            }
        }
        return () => {
            if (modalInstanceRef.current) {
                modalInstanceRef.current.hide();
            }
        };
    }, [showModal]);

    return (
        <div
            className="modal fade"
            id={id}
            tabIndex="-1"
            role="dialog"
            ref={modalRef}
            aria-hidden={!showModal}
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={hideModal}
                        ></button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        <PrimaryButton
                            type="button"
                            isOutline={true}
                            data-bs-dismiss="modal"
                            onClick={hideModal}
                        >
                            Close
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
