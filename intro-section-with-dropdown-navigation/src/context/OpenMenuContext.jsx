import { createContext, useContext, useState } from "react";

const OpenMenuContext = createContext();

function OpenMenuProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((nav) => !nav);
  }

  return (
    <OpenMenuContext.Provider value={{ navOpen, toggleNav }}>
      {children}
    </OpenMenuContext.Provider>
  );
}

function useOpenMenu() {
  const context = useContext(OpenMenuContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}
export { OpenMenuProvider, useOpenMenu };
