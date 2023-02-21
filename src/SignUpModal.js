import styled from "styled-components";

import Modal from "./Modal";

const ModalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    position: relative;
    width: 90vw;
    max-width: 450px;
    background-color: #ffffff70;
    backdrop-filter: blur(10px);
    border-radius: 14px;
    overflow-y: auto;
    padding: 14px;

    @media (max-width: 768px) {
        align-items: start;
    }
`;

const TextField = styled.input`
    border: 2px solid #313131;
    background-color: #31313140;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    font-family: Inter;
    outline: none;
    width: calc(100% - 20px);

    &:focus {
        border-color: #7151f5;
    }
`;

const Button = styled.div`
    display: inline-flex;
    border: 2px solid #7151f5;
    padding: 10px 30px;
    border-radius: 8px;
    color: #7151f5;
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
    text-decoration: none;
    transition: 0.2s ease-out;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        transform: scale(1.06);
        transition: 0.2s ease-out;
    }
`;

const SignUpModal = ({ showModal, closeModal }) => {
    return (
        <Modal showModal={showModal} closeModal={closeModal}>
            <ModalContent>
                <TextField
                    type="text"
                    placeholder="Email"
                    style={{ marginBottom: "14px" }}
                />
                <TextField
                    type="text"
                    placeholder="Twitter Link"
                    style={{ marginBottom: "20px" }}
                />
                <Button
                    href="https://google.com"
                    style={{ marginBottom: "0px" }}
                >
                    Join Waitlist
                </Button>
            </ModalContent>
        </Modal>
    );
};

export default SignUpModal;
