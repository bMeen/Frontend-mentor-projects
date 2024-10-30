import styled from "styled-components";
import Menus from "../components/Menus";

const StyledNavLists = styled.ul`
  display: flex;
  align-items: center;
  font-weight: 500;
  gap: 5rem;

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 2rem;
  }
`;

const List = styled.li`
  &:hover {
    color: var(--almost-black);
    cursor: pointer;
  }
`;

function NavLists() {
  return (
    <StyledNavLists>
      <Menus>
        <Menus.Menu>
          <NavList>Features</NavList>
          <Menus.Toggle />

          <Menus.List>
            <Menus.ListItem icon="../images/icon-todo.svg">
              Todo List
            </Menus.ListItem>
            <Menus.ListItem icon="../images/icon-calendar.svg">
              Calender
            </Menus.ListItem>
            <Menus.ListItem icon="../images/icon-reminders.svg">
              Reminder
            </Menus.ListItem>
            <Menus.ListItem icon="../images/icon-planning.svg">
              Planning
            </Menus.ListItem>
          </Menus.List>
        </Menus.Menu>
      </Menus>

      <Menus>
        <Menus.Menu>
          <NavList>Company</NavList>
          <Menus.Toggle />

          <Menus.List>
            <Menus.ListItem>History</Menus.ListItem>
            <Menus.ListItem>OurTeam</Menus.ListItem>
            <Menus.ListItem>Blog</Menus.ListItem>
          </Menus.List>
        </Menus.Menu>
      </Menus>

      <NavList>Careers</NavList>
      <NavList>About</NavList>
    </StyledNavLists>
  );
}

function NavList({ children }) {
  return <List>{children}</List>;
}

export default NavLists;
