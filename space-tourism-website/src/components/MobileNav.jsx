import { useMenu } from "../context/MobileMenuContext";

function MobileNav() {
  const { isOpen, toggleOpen } = useMenu();

  return (
    <img
      src={
        isOpen
          ? "assets/shared/icon-close.svg"
          : "/assets/shared/icon-hamburger.svg"
      }
      alt="mobile-nav-icon"
      className="z-30 cursor-pointer md:hidden"
      onClick={toggleOpen}
    />
  );
}

export default MobileNav;
