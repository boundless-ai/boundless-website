import styled from "styled-components";
import StarfieldAnimation from "react-starfield-animation";

const Screen = styled.div`
  background: linear-gradient(to top, #25155b, #020108);
  background-size: stretch;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const starfieldStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  right: "0px",
  bottom: "0px",
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;

const Button = styled.a`
  z-index: 1;
  background-color: #7151f5;
  padding: 12px 60px;
  border-radius: 100px;
  color: #eeedf9;
  font-size: 3vw;
  font-weight: 500;
  font-family: Inter;
  text-decoration: none;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.06);
    transition: 0.2s ease-out;
  }
  
  @media (max-width: 768px) {
    font-size: 35px;
`;

function App() {
  return (
    <Screen>
      <ContentContainer>
        <br />
        <br />
        <br />
        <Title>Boundless Search</Title>
        <br />
        <Subtitle>Instantly recall anything you've learned.</Subtitle>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button href="https://ronithk.substack.com/p/boundless-search?s=r&utm_campaign=post&utm_medium=web">More Info</Button>
      </ContentContainer>
      <StarfieldAnimation
        numParticles={200}
        depth={2000}
        style={starfieldStyle}
      />
    </Screen>
  );
}

export default App;
