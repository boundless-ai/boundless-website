import { useRef } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import StarfieldAnimation from "./starfield/index";
import { Tweet } from "react-twitter-widgets";

const Screen = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const starfieldStyle = {
    position: "absolute",
    width: "100vw",
    height: "294vh",
    zIndex: 0,
};

const ContentBackground = styled.div`
    background: linear-gradient(to top, #25155b, #020108);
    background-size: stretch;
    width: 100vw;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media (max-width: 768px) {
        align-items: start;
        padding-left: 30px;
        padding-right: 30px;
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

const SecondaryContentBackground = styled.div`
    background: linear-gradient(to top, #43279f, #25155b);
    background-size: stretch;
    width: 100vw;
`;

const SecondaryContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const TweetContainer = styled.div`
    z-index: 1;
    max-width: 700px;
    width: 95vw;
`;

function MainPage({ title, subtitle }) {
    var pageEndRef = useRef(null);

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={subtitle} />
                <meta
                    property="og:image"
                    content="https://boundless.so/cover.png"
                />
                <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8"
                ></script>
            </Helmet>
            <Screen>
                <ContentBackground>
                    <ContentContainer>
                        <Break count={3} />
                        <Title>{title}</Title>
                        <Break count={1} />
                        <Subtitle>{subtitle}</Subtitle>
                        <Break count={5} />
                        <Button
                            onClick={() =>
                                pageEndRef.current.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                        >
                            Teasers
                        </Button>
                    </ContentContainer>
                </ContentBackground>
                <SecondaryContentBackground>
                    <SecondaryContentContainer>
                        <div style={{ height: "40px" }} />

                        <TweetContainer>
                            <Tweet
                                tweetId="1630733879220011008"
                                options={{ theme: "dark", align: "center" }}
                            />
                        </TweetContainer>

                        <div style={{ height: "20px" }} />

                        <TweetContainer>
                            <Tweet
                                tweetId="1627118300194013186"
                                options={{ theme: "dark", align: "center" }}
                            />
                        </TweetContainer>
                    </SecondaryContentContainer>
                </SecondaryContentBackground>
                <StarfieldAnimation
                    numParticles={500}
                    depth={2000}
                    style={starfieldStyle}
                />
            </Screen>
            <div ref={pageEndRef} />
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

export default MainPage;
