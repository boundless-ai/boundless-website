import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`;

function Modal({ showModal, closeModal, children }) {
    if (!showModal) {
        return null;
    }

    return (
        <>
            <ModalContainer onClick={closeModal}>
                <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </ModalContainer>
        </>
    );
}

export default Modal;
