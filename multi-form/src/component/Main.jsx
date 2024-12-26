import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="flex flex-grow flex-col justify-between">
      <Outlet />
    </main>
  );
}

export default Main;
