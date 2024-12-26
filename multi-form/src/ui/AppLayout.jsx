import { useNavigate } from "react-router-dom";
import Main from "../component/Main";
import Sidebar from "../component/Sidebar";
import { useEffect } from "react";

function AppLayout() {
  const navigate = useNavigate();

  useEffect(function () {
    navigate("/");
  }, []);

  return (
    <div className="flex min-h-dvh flex-col shadow-xl lg:mx-auto lg:min-h-[auto] lg:w-full lg:max-w-screen-lg lg:flex-row lg:rounded-2xl lg:bg-white lg:p-3">
      <Sidebar />
      <Main />
    </div>
  );
}

export default AppLayout;
//min-h-dvh
