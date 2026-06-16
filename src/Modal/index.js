import React from "react";
import { createPortal } from "react-dom";
import './Modal.css';

function Modal({ children }){
    return createPortal(
        <div className="Modal-overlay">
            <div className="Modal-content">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };