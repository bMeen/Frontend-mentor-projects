import Header from "../../components/Header";
import CrewMain from "./CrewMain";

function CrewHome() {
  return (
    <div className="min-h-screen bg-blue-900 bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
      <Header />
      <CrewMain />
    </div>
  );
}

export default CrewHome;
