import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Step1 from "./pages/Step1/Step1";
import Step2 from "./pages/Step2/Step2";
import Step3 from "./pages/Step3/Step3";
import Step4 from "./pages/Step4/Step4";
import Step5 from "./pages/Step5/Step5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Step1 />} />
          <Route path="/step-2" element={<Step2 />} />
          <Route path="/step-3" element={<Step3 />} />
          <Route path="/step-4" element={<Step4 />} />
          <Route path="/step-5" element={<Step5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
