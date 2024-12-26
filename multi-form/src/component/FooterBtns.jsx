import { useLocation, useNavigate } from "react-router-dom";

function FooterBtns({ onClick }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const index = pathname === "/" ? 1 : +pathname.slice(-1);
  const back = `${index === 2 ? "/" : `/step-${index - 1}`}`;

  if (index > 4) return;

  return (
    <footer className="bg-white py-4">
      <div className="mx-auto flex w-11/12 items-center justify-between text-sm font-medium lg:w-8/12 lg:text-base">
        <p
          onClick={() => navigate(back)}
          className="cursor-pointer font-medium text-cool-gray hover:text-marine-blue"
        >
          {pathname !== "/" ? "Go Back" : ""}
        </p>
        <button
          className={`rounded bg-marine-blue px-4 py-2.5 text-white hover:bg-marine-blue/90 lg:px-6 ${index === 4 ? "bg-purplish-blue hover:bg-purplish-blue/60" : ""}`}
          type="submit"
          onClick={onClick}
        >
          {index === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </footer>
  );
}

export default FooterBtns;
