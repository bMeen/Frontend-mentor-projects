import styled from "styled-components";
import ButtonContainer from "./ButtonContainer";
import NavLists from "./NavLists";
import { useOpenMenu } from "../context/OpenMenuContext";

const Overlay = styled.div`
  display: ${(props) => (props.$navOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--almost-black);
  opacity: 0.6;
  z-index: 1;
  transition: all 0.5s;

  @media (min-width: 790px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-basis: 100%;

  @media (max-width: 790px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    max-width: 25rem;
    height: 100vh;
    background-color: var(--almost-white);
    padding: 6rem 1.5rem 0;
    transform: translateX(${(props) => (props.$navOpen ? "0" : "100%")});
    transition: all 1s;
    z-index: 100;
    flex-direction: column;
    gap: 3rem;
    align-items: start;
    justify-content: flex-start;
  }
`;

function Navbar() {
  const { navOpen, toggleNav } = useOpenMenu();

  return (
    <>
      <Overlay $navOpen={navOpen} onClick={toggleNav} />
      <StyledNav $navOpen={navOpen}>
        <NavLists />
        <ButtonContainer />
      </StyledNav>
    </>
  );
}

export default Navbar;
