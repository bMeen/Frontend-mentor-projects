import styled from "styled-components";
import Row from "./Row";

const StyledHeader = styled.div`
  background-color: var(--soft-red);
  color: var(--very-pale-orange);
  padding: 1.5rem;
  border-radius: var(--rounded);
  margin-bottom: 1.5rem;

  & img {
    width: 6rem;
    height: 6rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Row $type="horizontal">
        <Row $type="vertical">
          <p>My balance</p>
          <h3>$921.48</h3>
        </Row>
        <img src="./images/logo.svg" />
      </Row>
    </StyledHeader>
  );
}

export default Header;
