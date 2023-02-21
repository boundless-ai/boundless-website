import { useState } from "react";
import styled from "styled-components";
import { Checkmark } from "react-checkmark";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormContainer = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 70vw;
    max-width: 450px;
    background-color: #00000050;
    backdrop-filter: blur(3px);
    border-radius: 14px;
    overflow-y: auto;
    padding: 40px;
`;

const Title = styled.div`
    color: #eeedf9;
    font-size: 42px;
    font-weight: 600;
    font-family: Inter;

    @media (max-width: 768px) {
        font-size: 35px;
        flex-wrap: wrap;
    }
`;

const TextField = styled.input`
    width: 100%;
    box-sizing: border-box;
    color: white;
    border: 2px solid #313131;
    background-color: #31313130;
    border-radius: 8px;
    padding: 10px;
    font-size: 20px;
    font-family: Inter;
    outline: none;
    transition: 0.2s ease-out;

    &:focus {
        transition: 0.2s ease-out;
        border-color: #531ed6;
    }
`;

const Button = styled.button`
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
    outline: none;
    border: none;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        transform: scale(1.1);
        transition: 0.2s ease-out;
    }
`;

const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    twitter: Yup.string().url("Invalid Twitter URL").required("Required"),
});

const SignUpForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errorMessageStyle = {
        color: "red",
        marginBottom: "6px",
        display: "inline-flex",
        "font-family": "Inter",
        "margin-left": "6px",
        "text-align": "left",
        width: "100%",
    };

    return (
        <FormContainer>
            <Formik
                initialValues={{ name: "", email: "", twitter: "" }}
                validationSchema={SignUpSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        setIsSubmitted(true);
                    }, 400);
                }}
            >
                {({ values, handleChange, handleBlur, isSubmitting }) => (
                    <Form
                        style={{
                            display: "flex",
                            "flex-direction": "column",
                            "justify-contents": "center",
                            "align-items": "center",
                            width: "100%",
                        }}
                    >
                        <Title style={{ marginBottom: "40px" }}>
                            Join Waitlist
                        </Title>

                        <ErrorMessage
                            name="name"
                            component="div"
                            style={errorMessageStyle}
                        />
                        <TextField
                            name="name"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder="Full Name"
                            style={{ marginBottom: "20px" }}
                        />

                        <ErrorMessage
                            name="email"
                            component="div"
                            style={errorMessageStyle}
                        />
                        <TextField
                            name="email"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                            style={{ marginBottom: "20px" }}
                        />

                        <ErrorMessage
                            name="twitter"
                            component="div"
                            style={errorMessageStyle}
                        />
                        <TextField
                            name="twitter"
                            type="link"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.twitter}
                            placeholder="Twitter Link"
                            style={{ marginBottom: "40px" }}
                        />

                        {isSubmitted ? (
                            <div
                                style={{
                                    display: "flex",
                                    "align-items": "center",
                                    gap: "8px",
                                    color: "#A491F0",
                                    "font-family": "Inter",
                                    "font-size": "20px",
                                    "font-weight": "600",
                                }}
                            >
                                <Checkmark size="20px" color="#866BF0" />
                                Success!
                            </div>
                        ) : (
                            <Button type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        )}
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
};

export default SignUpForm;