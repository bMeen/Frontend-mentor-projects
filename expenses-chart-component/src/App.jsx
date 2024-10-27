import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyles from "./GlobalStyles";

const StyledApp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-width: 45rem;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Header />
      <Main />
    </StyledApp>
  );
}

export default App;
