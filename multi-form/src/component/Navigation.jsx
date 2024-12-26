import { NavLink } from "react-router-dom";

const navSteps = [
  { step: 1, details: "Your Info" },
  { step: 2, details: "Select plan" },
  { step: 3, details: "Add-ons" },
  { step: 4, details: "Summary" },
];

function Navigation() {
  return (
    <ul className="flex -translate-y-full justify-center gap-4 lg:-translate-y-0 lg:flex-col lg:gap-8">
      {navSteps.map((s, i) => (
        <li key={i} className="flex items-center gap-3">
          <NavLink
            to={`${s.step === 1 ? "/" : `/step-${s.step}`}`}
            className={({ isActive }) =>
              `${
                isActive || (s.step === 4 && location.pathname === "/step-5")
                  ? "bg-light-blue text-marine-blue"
                  : "border-2 border-white text-white"
              } flex h-8 w-8 items-center justify-center rounded-full font-bold lg:h-10 lg:w-10`
            }
            onClick={(e) => e.preventDefault()}
          >
            <span>{s.step}</span>
          </NavLink>
          <div className="hidden uppercase leading-5 lg:block">
            <p className="text-xs text-light-gray">Step {s.step}</p>
            <p className="text-sm font-medium tracking-widest text-alabaster">
              {s.details}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
