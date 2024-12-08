import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useAddress } from "../context/IpAddressContext";

const customIcon = L.icon({ iconUrl: "/images/icon-location.svg" });

function Map() {
  const [position, setPosition] = useState([6.465422, 3.406448]);
  const { data } = useAddress();
  const { location: { lat, lng } = {} } = data;

  useEffect(
    function () {
      if (lat && lng) setPosition([lat, lng]);
    },
    [lat, lng],
  );

  return (
    <main className="relative z-10 h-screen">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon} />
        <ChangeCenter position={position} />
      </MapContainer>
    </main>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
