import { useState } from "react";
import styled from "styled-components";
import StarfieldAnimation from "react-starfield-animation";
import Helmet from "react-helmet";

import SignUpForm from "./SignUpForm";

const Screen = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StarfieldContainer = styled.div`
    position: "sticky";
`;

const starfieldStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
};

const ContentContainer = styled.div`
    background: linear-gradient(to top, #25155b, #020108);
    background-size: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
        align-items: start;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 100px;
    }
`;

const Title = styled.div`
    color: #eeedf9;
    font-size: 8vw;
    font-weight: 600;
    font-family: Inter;

    @media (max-width: 768px) {
        font-size: 60px;
        text-align: left;
        flex-wrap: wrap;
    }
`;

const Subtitle = styled.div`
    color: #eeedf9;
    font-size: 4vw;
    font-weight: 500;
    font-family: Inter;

    @media (max-width: 768px) {
        font-size: 35px;
        text-align: left;
        flex-wrap: wrap;
    }
`;

const Button = styled.a`
  z-index: 1;
  padding: 12px 60px;
  background-color: #7151f5;
  border-radius: 100px;
  color: #eeedf9;
  font-size: 3vw;
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
  
  @media (max-width: 768px) {
    font-size: 35px;
`;

const SecondaryContentContainer = styled.div`
    background: linear-gradient(to top, #43279f, #25155b);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 100px;
    }
`;

function App() {
    const [showModal, setShowModal] = useState(true);

    return (
        <>
            <Helmet>
                <title>Boundless</title>
                <meta property="og:title" content="Boundless" />
                <meta
                    property="og:description"
                    content="Instantly recall anything you've learned."
                />
                <meta
                    property="og:image"
                    content="https://boundless.so/cover.png"
                />
                <script async src="https://tally.so/widgets/embed.js"></script>
            </Helmet>
            <StarfieldAnimation
                numParticles={200}
                depth={2000}
                style={starfieldStyle}
            />
            <Screen>
                <ContentContainer>
                    <Break count={3} />
                    <Title>Boundless</Title>
                    <Break count={1} />
                    <Subtitle>Your personalized, intelligent OS</Subtitle>
                    <Break count={5} />
                    <Button>Join Waitlist</Button>
                </ContentContainer>
                <SecondaryContentContainer>
                    <SignUpForm />
                </SecondaryContentContainer>
            </Screen>
        </>
    );
}

function Break(props) {
    const breaks = [];
    for (let i = 0; i < props.count; i++) {
        breaks.push(<br />);
    }
    return <div>{breaks}</div>;
}

export default App;
