import styled from "styled-components";
import Button from "./Button";

import { useOpenMenu } from "../context/OpenMenuContext";

const StyledMobileNav = styled.div`
  z-index: 100;

  @media (min-width: 790px) {
    display: none;
  }
`;

function MobileNav() {
  const { navOpen, toggleNav } = useOpenMenu();

  return (
    <StyledMobileNav>
      <Button onClick={toggleNav}>
        {navOpen ? (
          <img src="../images/icon-close-menu.svg" />
        ) : (
          <img src="../images/icon-menu.svg" />
        )}
      </Button>
    </StyledMobileNav>
  );
}

export default MobileNav;
