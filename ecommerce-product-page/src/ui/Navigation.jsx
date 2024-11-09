import { useMenu } from "../context/MobileMenuContext";
import Overlay from "./Overlay";

function Navigation() {
  const { isOpen } = useMenu();

  return (
    <>
      <Overlay />
      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 z-30 h-screen max-w-64 transform border-2 bg-white pl-5 pt-16 transition-transform duration-700 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex cursor-pointer flex-col space-y-4 font-bold text-very-dark-blue">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex cursor-pointer items-center space-x-10">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
