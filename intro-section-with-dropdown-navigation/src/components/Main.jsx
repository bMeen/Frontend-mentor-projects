import styled from "styled-components";
import Details from "../ui/Details";
import Hero from "../ui/Hero";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (min-width: 790px) {
    flex-direction: row-reverse;
    gap: 0;
    max-width: 130rem;
    margin: 0 auto;
    width: 85%;
  }
`;

function Main() {
  return (
    <StyledMain>
      <Hero />
      <Details />
    </StyledMain>
  );
}

export default Main;
