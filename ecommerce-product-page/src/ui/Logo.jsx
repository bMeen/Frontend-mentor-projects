import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

function Logo() {
  return (
    <div className="flex items-center gap-3 md:gap-12">
      <MobileNav />

      <div>
        <img src="../images/logo.svg" className="mb-1" />
      </div>

      <Navigation />
    </div>
  );
}

export default Logo;
