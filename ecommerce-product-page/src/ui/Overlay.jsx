import { useMenu } from "../context/MobileMenuContext";

function Overlay() {
  const { isOpen, toggleOpen } = useMenu();

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} fixed inset-0 z-20 h-screen w-full bg-black opacity-60 transition-all md:hidden`}
      onClick={toggleOpen}
    ></div>
  );
}

export default Overlay;
