import Logo from "../ui/Logo";
import Divide from "./Divide";
import MobileNav from "./MobileNav";
import Navigations from "./Navigations";

function Header() {
  return (
    <header className="p-300 lg:pt-500 flex items-center justify-between md:p-0">
      <Logo />
      <MobileNav />
      <Divide />
      <Navigations />
    </header>
  );
}

export default Header;
//p-300
