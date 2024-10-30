import styled from "styled-components";

const StyledLogo = styled.div`
  margin-top: 1rem;
`;

const Img = styled.img`
  max-width: 8rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="../images/logo.svg" />
    </StyledLogo>
  );
}

export default Logo;
