import logo from "./logo.svg";
import styled from "styled-components";
import StarfieldAnimation from "react-starfield-animation";

const Screen = styled.div`
  background: linear-gradient(to top, #201b46, #020108);
  background-size: stretch;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const starfieldStyle = {
  position: "absolute",
  zIndex: 1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const Title = styled.div`
  color: #eeedf9;
  font-size: 16vw;
  text-align: center;
  width: 100%;
  font-weight: 400;
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
