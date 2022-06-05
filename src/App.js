import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Screen = styled.div`
  background-color: #000000;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 16vw;
  text-align: center;
  width: 100%;
  font-weight: 400;
  font-family: "Inter";
`;

function App() {
  return (
    <Screen>
      <TitleContainer>
        <Title>Boundless</Title>
      </TitleContainer>
    </Screen>
  );
}

export default App;
