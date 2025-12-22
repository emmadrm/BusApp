import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker from "../leaflet/marker.png";
import cities from "../leaflet/cities.json";
import MovingBus from "./MovingBus";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";

const markerIcon = new L.Icon({
  iconUrl: marker,
  iconSize: [35, 45],
});

function Map(props) {
  const [target, setTarget] = useState(null);
  const location = useLocation();
  const state = location.state || {};
  const storeName = state.StoreName;
  console.log(storeName);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const pickCity = cities[Math.floor(Math.random() * cities.length)];
    setTarget({
      lat: parseFloat(pickCity.lat),
      lng: parseFloat(pickCity.lng),
    });
  }, []);

  return (
    <div className="map">
      {target && (
        <Modal
          message={`Θα παραλαβετε την παραγγελια σας στην πολη ${target.city}. Χρονος εκτιμώμενης παραλαβής: ${selectedTime} λεπτα`}
        />
      )}
      <div className="map-box">
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
              <Popup>{city.coffee}</Popup>
            </Marker>
          ))}
          {target && (
            <MovingBus
              target={target}
              setTarget={setTarget}
              setSelectedTime={setSelectedTime}
              storeName={storeName}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
