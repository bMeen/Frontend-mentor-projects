import Details from "./Details";
import Heading from "./Heading";
import Input from "./Input";

function Header() {
  return (
    <header className="relative h-[300px] bg-[url('/images/pattern-bg-mobile.png')] bg-cover bg-no-repeat p-5 pb-0 text-center md:h-[280px] md:bg-[url('/images/pattern-bg-desktop.png')] md:py-0">
      <div className="w-full md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <Heading />
        <Input />
      </div>

      <Details />
    </header>
  );
}

export default Header;
