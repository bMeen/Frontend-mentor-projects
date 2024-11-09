import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const MobileMenuContext = createContext();

function MobileMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MobileMenuContext);

  if (context === undefined)
    throw new Error("MobileMenuContext was used outside MobileMenuProvider");

  return context;
}

export { MobileMenuProvider, useMenu };
