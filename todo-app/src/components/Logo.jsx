import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex cursor-pointer items-center justify-between">
      <h1 className="text-very-light-gray text-2xl font-bold tracking-[.75rem]">
        TODO
      </h1>
      <div onClick={toggleDarkMode}>
        <img
          src={isDarkMode ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
          alt="icon"
        />
      </div>
    </div>
  );
}

export default Logo;
