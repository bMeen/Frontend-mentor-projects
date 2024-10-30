import styled from "styled-components";
import Buttton from "./Button";
import Clients from "./Clients";

const StyledDetails = styled.div`
  text-align: center;
  padding: 0 1rem;

  & h1 {
    color: var(--almost-black);
    margin-bottom: 1.5rem;
    font-size: 3.5rem;
  }

  & p {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  & button {
    margin: 3rem auto;
  }

  @media (min-width: 790px) {
    width: 50%;
    display: flex;
    align-items: flex-start;
    gap: 5rem;
    justify-content: end;
    flex-direction: column;
    text-align: left;

    & h1 {
      margin: 0;
      font-size: 7rem;
      max-width: 47rem;
    }

    & p {
      max-width: 40rem;
    }

    & button {
      margin: 0;
    }
  }
`;

function Details() {
  return (
    <StyledDetails>
      <h1>Make remote work</h1>
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <Buttton $type="fill">Learn more</Buttton>
      <Clients />
    </StyledDetails>
  );
}

export default Details;
