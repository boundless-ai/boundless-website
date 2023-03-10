import { useState } from "react";
import styled from "styled-components";
import { Checkmark } from "react-checkmark";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

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
    border: 1px solid #313131;
    background-color: #31313150;
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

    ::placeholder {
        color: #b5b4bd;
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
    twitter: Yup.string().required("Required"),
});

const SignUpForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errorMessageStyle = {
        color: "red",
        marginBottom: "6px",
        display: "inline-flex",
        fontFamily: "Inter",
        marginLeft: "6px",
        textAlign: "left",
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
                    setTimeout(async () => {
                        const source = window.location.pathname.replace(
                            "/",
                            ""
                        );

                        const supabase = createClient(
                            "https://nalpfwphutndpevbickm.supabase.co",
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hbHBmd3BodXRuZHBldmJpY2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0Mjk5NDksImV4cCI6MTk5NDAwNTk0OX0.c13jwuDhy0IFpuJ56ZYnzTZaL3lwdiy0k7aoA4XRq5c"
                        );

                        await supabase.from("waitlist").insert({
                            id: uuidv4(),
                            name: values.name,
                            email: values.email,
                            twitter: "https://twitter.com/".concat(
                                values.twitter
                            ),
                            source: source === "" ? "boundless" : source,
                            date: new Date(),
                        });

                        setSubmitting(false);
                        setIsSubmitted(true);
                    }, 400);
                }}
            >
                {({ values, handleChange, handleBlur, isSubmitting }) => (
                    <Form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContents: "center",
                            alignItems: "center",
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
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.twitter}
                            placeholder="Twitter Handle"
                            style={{ marginBottom: "40px" }}
                        />

                        {isSubmitted ? (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    color: "#A491F0",
                                    fontFamily: "Inter",
                                    fontSize: "20px",
                                    fontWeight: "600",
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
