import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import DestinationHome from "./pages/destination/DestinationHome";
import CrewHome from "./pages/crew/CrewHome";
import Technlogy from "./pages/technology/Technlogy";
import { ContentContextProvider } from "./context/ContentContext";
import { MobileMenuProvider } from "./context/MobileMenuContext";

function App() {
  return (
    <MobileMenuProvider>
      <ContentContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/destinations" element={<DestinationHome />} />
            <Route path="/crew" element={<CrewHome />} />
            <Route path="/technology" element={<Technlogy />} />
          </Routes>
        </BrowserRouter>
      </ContentContextProvider>
    </MobileMenuProvider>
  );
}

export default App;
