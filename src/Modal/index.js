import React from "react";
import { createPortal } from "react-dom";
import './Modal.css';
import { TodoContext } from "../TodoContext";

function Modal({ children }){
    const {
        setOpenModal,
    } = React.useContext(TodoContext);
    
    return createPortal(
        <div className="Modal-overlay">
            <div className="Modal-content">
                {/* Botón de cerrar */}
                <button className="Modal-close-button" onClick={() => {
                    setOpenModal(false)
                    }}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };