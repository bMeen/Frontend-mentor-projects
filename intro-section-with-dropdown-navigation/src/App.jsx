import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyles from "./GlobalStyles";
import { OpenMenuProvider } from "./context/OpenMenuContext";

const StyledApp = styled.div``;

function App() {
  return (
    <OpenMenuProvider>
      <StyledApp>
        <GlobalStyles />
        <Header />
        <Main />
      </StyledApp>
    </OpenMenuProvider>
  );
}

export default App;
