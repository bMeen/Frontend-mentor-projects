import { NavLink } from "react-router-dom";

function Navigation({ navigation }) {
  return (
    <nav className="hidden md:block">
      <ul className="flex h-[96px] items-center justify-center gap-300 bg-white/5 px-500 text-preset-8-lg uppercase text-white backdrop-blur-[80px] lg:gap-600 lg:px-800">
        {navigation.map((item, i) => (
          <li
            key={i}
            className={`${
              window.location.pathname === (item === "home" ? "/" : `/${item}`)
                ? "nav-active"
                : "nav"
            } relative cursor-pointer tracking-[2px]`}
          >
            <NavLink to={item === "home" ? "/" : `/${item}`}>
              {item !== "home" && (
                <span className="font-bold tracking-[2.7px] md:mr-50 lg:mr-150">
                  {"0" + i}
                </span>
              )}

              {item === "destinations" ? "destination" : item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
