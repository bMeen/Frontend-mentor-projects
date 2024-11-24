import Header from "../../components/Header";
import DestinationMain from "./DestinationMain";

function DestinationHome() {
  return (
    <div className="min-h-screen bg-blue-900 bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <Header />

      <DestinationMain />
    </div>
  );
}

export default DestinationHome;
