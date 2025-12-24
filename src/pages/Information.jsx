import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker from "../leaflet/marker.png";
import sights from "../leaflet/sights.json";
import MovingBus from "../components/MovingBus";
import Modal from "../components/Modal";

const markerIcon = new L.Icon({
  iconUrl: marker,
  iconSize: [35, 45],
});

const monuments = sights;

function Information() {
  const [target, setTarget] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const pickMonument = monuments[Math.floor(Math.random() * monuments.length)];
    setTarget({
      lat: Number.parseFloat(pickMonument.lat),
      lng: Number.parseFloat(pickMonument.lng),
    });
  }, []);

  return (
    <div className="map">
      {target && (
        <Modal
          message={`Εξερευνήστε το μνημείο: ${monuments.find(m => m.lat === target.lat && m.lng === target.lng)?.name}. Χρόνος εκτιμώμενης άφιξης: ${selectedTime} λεπτά`}
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
          {monuments.map((monument) => (
            <Marker key={monument.name} position={[monument.lat, monument.lng]} icon={markerIcon}>
              <Popup>
                <strong>{monument.name}</strong><br />
                {monument.description}
              </Popup>
            </Marker>
          ))}
          {target && (
            <MovingBus
              target={target}
              setTarget={setTarget}
              setSelectedTime={setSelectedTime}
              storeName="Information"
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default Information;