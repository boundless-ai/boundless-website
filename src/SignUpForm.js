import styled from "styled-components";

const FormContainer = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 90vw;
    max-width: 450px;
    background-color: #00000060;
    backdrop-filter: blur(2px);
    border-radius: 14px;
    overflow-y: auto;
    padding: 40px;

    @media (max-width: 768px) {
        align-items: start;
    }
`;

const Title = styled.div`
    color: #eeedf9;
    font-size: 42px;
    font-weight: 600;
    font-family: Inter;

    @media (max-width: 768px) {
        font-size: 35px;
        text-align: left;
        flex-wrap: wrap;
    }
`;

const TextField = styled.input`
    color: white;
    border: 2px solid #313131;
    background-color: #31313140;
    border-radius: 8px;
    padding: 10px;
    font-size: 20px;
    font-family: Inter;
    outline: none;
    width: calc(100% - 20px);
    transition: 0.2s ease-out;

    &:focus {
        transition: 0.2s ease-out;
        border-color: #531ed6;
    }
`;

const Button = styled.div`
    display: inline-flex;
    padding: 10px 30px;
    border-radius: 100px;
    background-color: #531ed6;
    border-radius: 100px;
    color: #eeedf9;
    color: white;
    font-size: 20px;
    font-weight: 500;
    font-family: Inter;
    text-decoration: none;
    transition: 0.2s ease-out;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        transform: scale(1.1);
        transition: 0.2s ease-out;
    }
`;

const SignUpForm = () => {
    return (
        <FormContainer>
            <Title style={{ marginBottom: "40px" }}>Join Waitlist</Title>
            <TextField
                type="text"
                placeholder="Name"
                style={{ marginBottom: "20px" }}
            />
            <TextField
                type="text"
                placeholder="Email"
                style={{ marginBottom: "20px" }}
            />
            <TextField
                type="text"
                placeholder="Twitter Link (Optional)"
                style={{ marginBottom: "40px" }}
            />
            <Button href="https://google.com" style={{ marginBottom: "0px" }}>
                Submit
            </Button>
        </FormContainer>
    );
};

export default SignUpForm;
