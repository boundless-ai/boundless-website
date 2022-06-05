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
  font-size: 16vw;
  text-align: center;
  width: 100%;
  font-weight: 400;
  font-family: "Inter";
`;

const Subtitle = styled.div`
  color: #eeedf9;
  font-size: 6vw;
  text-align: center;
  width: 100%;
  font-weight: 300;
  font-family: "Inter";
`;

function App() {
  return (
    <Screen>
      <StarfieldAnimation numParticles={400} style={starfieldStyle} />
      <Title>Boundless</Title>
    </Screen>
  );
}

export default App;
