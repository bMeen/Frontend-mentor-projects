import Header from "../../components/Header";
import MainTech from "./MainTech";

function Technlogy() {
  return (
    <div className="min-h-screen bg-blue-900 bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]">
      <Header />
      <MainTech />
    </div>
  );
}

export default Technlogy;
