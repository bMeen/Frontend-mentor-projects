import Navigation from "./Navigation";

function Sidebar() {
  return (
    <nav className="flex h-[172px] items-center justify-center bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat lg:h-[568px] lg:min-w-[274px] lg:items-start lg:justify-start lg:bg-[url('/images/bg-sidebar-desktop.svg')] lg:p-8">
      <Navigation />
    </nav>
  );
}

export default Sidebar;
