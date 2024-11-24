import { NavLink } from "react-router-dom";

function Sidebar({ navigation, isOpen, toggleOpen }) {
  return (
    <nav
      className={`fixed right-0 top-0 z-20 h-screen w-64 transform pl-400 backdrop-blur-[80px] transition-transform duration-700 ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="absolute top-[133px] flex w-[222px] flex-col gap-400 font-sans-barlow-condensed text-preset-8 text-white">
        {navigation.map((item, i) => (
          <li
            key={i}
            className={`uppercase tracking-[2px] hover:border-r-4 hover:border-black ${
              window.location.pathname === (item === "home" ? "/" : `/${item}`)
                ? "border-r-4"
                : ""
            }`}
            onClick={toggleOpen}
          >
            <NavLink to={item === "home" ? "/" : `/${item}`}>
              <span className="mr-150 font-bold tracking-[2.7px]">0{i}</span>
              {item === "destinations" ? "destination" : item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
