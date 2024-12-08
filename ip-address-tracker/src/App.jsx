import Header from "./components/Header";
import Map from "./components/Map";
import { IpAddressProvider } from "./context/IpAddressContext";

function App() {
  return (
    <div>
      <IpAddressProvider>
        <Header />
        <Map />
      </IpAddressProvider>
    </div>
  );
}

export default App;
