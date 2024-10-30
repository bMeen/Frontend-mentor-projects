import { createContext, useContext, useState } from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  z-index: 1;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem;
  gap: 1.5rem;

  @media (min-width: 790px) {
    position: absolute;
    z-index: 1;
    top: 250%;
    left: 50%;
    transform: translateX(-50%);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
`;

const MenuContext = createContext();

function Menus({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((open) => !open);
  }

  return (
    <MenuContext.Provider value={{ isOpen, toggle }}>
      {children}
    </MenuContext.Provider>
  );
}

function Menu({ children }) {
  const { toggle } = useContext(MenuContext);
  return <StyledMenu onClick={toggle}>{children}</StyledMenu>;
}

function Toggle() {
  const { isOpen } = useContext(MenuContext);

  return (
    <img
      src={
        isOpen ? "../images/icon-arrow-up.svg" : "../images/icon-arrow-down.svg"
      }
    />
  );
}

function List({ children }) {
  const { isOpen } = useContext(MenuContext);

  return <>{isOpen && <StyledList>{children}</StyledList>}</>;
}

function ListItem({ children, icon }) {
  return (
    <Item>
      {icon && <img src={icon} />}
      {children}
    </Item>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.ListItem = ListItem;

export default Menus;
