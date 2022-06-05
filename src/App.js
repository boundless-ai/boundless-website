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

const Title = styled.div`
  color: #eeedf9;
  font-size: 10vw;
  text-align: center;
  width: 100%;
  font-weight: 400;
  font-family: Inter;
`;

const Subtitle = styled.div`
  color: #eeedf9;
  font-size: 5vw;
  text-align: center;
  width: 100%;
  font-weight: 400;
  font-family: Inter;
`;

const Button = styled.a`
  z-index: 1;
  background-color: #7151f5;
  padding: 6px 50px;
  border-radius: 100px;
  color: #eeedf9;
  font-size: 5vw;
  font-weight: 400;
  font-family: Inter;
  text-decoration: none;
`;

function App() {
  return (
    <Screen>
      <Title>Boundless Search</Title>
      <br />
      <Subtitle>instantly find anything you've learned</Subtitle>
      <br />
      <br />
      <br />
      <br />
      <Button href="https://google.com">learn more</Button>
      <StarfieldAnimation
        numParticles={200}
        depth={2000}
        style={starfieldStyle}
      />
    </Screen>
  );
}

export default App;
