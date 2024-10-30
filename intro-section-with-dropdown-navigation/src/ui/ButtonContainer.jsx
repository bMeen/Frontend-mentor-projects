import styled from "styled-components";
import Button from "./Button";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 790px) {
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;
  }

  & p:hover {
    color: var(--almost-black);
    cursor: pointer;
  }

  & button {
    width: 100%;
  }
`;

function ButtonContainer() {
  return (
    <StyledContainer>
      <p>Login</p>
      <Button $type="primary">Register</Button>
    </StyledContainer>
  );
}

export default ButtonContainer;
