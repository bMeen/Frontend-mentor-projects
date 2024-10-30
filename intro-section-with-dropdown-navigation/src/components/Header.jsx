import styled from "styled-components";
import Logo from "../ui/Logo";
import MobileNav from "../ui/MobileNav";
import Navbar from "../ui/Navbar";

const StyledHeader = styled.header`
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 790px) {
    gap: 0;
    justify-content: space-between; //mobile
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <MobileNav />
    </StyledHeader>
  );
}

export default Header;
