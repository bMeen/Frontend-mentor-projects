import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { TodoProvider } from "./context/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </DarkModeProvider>
  </StrictMode>,
);
