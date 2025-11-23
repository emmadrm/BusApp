import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker from "../leaflet/marker.png";
import cities from "../leaflet/cities.json";

const markerIcon = new L.Icon({
  iconUrl: marker,
  iconSize: [35, 45],
});

function Map() {
  return (
    <div>
      <MapContainer
        center={[37.9838, 23.7275]}
        zoom={9}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {cities.map((city, idx) => (
          <Marker key={idx} position={[city.lat, city.lng]} icon={markerIcon}>
            <Popup>{city.city}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
