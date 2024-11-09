import { useMenu } from "../context/MobileMenuContext";

function MobileNav() {
  const { isOpen, toggleOpen } = useMenu();

  return (
    <button onClick={toggleOpen} className="z-40 h-5 w-5 md:hidden">
      <img
        src={isOpen ? "../images/icon-close.svg" : "../images/icon-menu.svg"}
        alt="menu-open-icon"
        className="w-full"
      />
    </button>
  );
}

export default MobileNav;
