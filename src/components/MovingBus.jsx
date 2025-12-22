import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { BusFront } from "lucide-react";
import busPng from "../leaflet/bus.png";
import cities from "../leaflet/cities.json";

const peloponneseBounds = {
  latMin: 36.3,
  latMax: 38.5,
  lngMin: 21.2,
  lngMax: 23.5,
};

function randomPeloponnesePoint() {
  return {
    lat:
      peloponneseBounds.latMin +
      Math.random() * (peloponneseBounds.latMax - peloponneseBounds.latMin),
    lng:
      peloponneseBounds.lngMin +
      Math.random() * (peloponneseBounds.lngMax - peloponneseBounds.lngMin),
  };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function distance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const busIcon = new L.Icon({
  iconUrl: busPng,
  iconSize: [30, 30],
  iconAnchor: [20, 20],
});

export default function MovingBus({
  target,
  setTarget,
  setSelectedTime,
  storeName,
}) {
  const map = useMap();
  const [position, setPosition] = useState(randomPeloponnesePoint());

  const step = 0.002;

  useEffect(() => {
    if (!storeName) return;

    const matchedCities = cities.filter((c) => c.coffee === storeName);
    if (matchedCities.length === 0) return;

    let nearestCity = matchedCities[0];
    let minDist = distance(
      position.lat,
      position.lng,
      nearestCity.lat,
      nearestCity.lng
    );

    matchedCities.forEach((city) => {
      const d = distance(position.lat, position.lng, city.lat, city.lng);
      if (d < minDist) {
        minDist = d;
        nearestCity = city;
      }
    });

    setTarget(nearestCity);
  }, [storeName]);

  useEffect(() => {
    if (!target) return;
    let t = 0;

    const totalDistance = distance(
      position.lat,
      position.lng,
      target.lat,
      target.lng
    );
    const eta = Math.round((totalDistance / 40) * 60); // 40 km/h average speed
    setSelectedTime(eta);

    const interval = setInterval(() => {
      t += step;

      const newLat = lerp(position.lat, target.lat, t);
      const newLng = lerp(position.lng, target.lng, t);

      setPosition({ lat: newLat, lng: newLng });

      const dist = distance(newLat, newLng, target.lat, target.lng);
      if (dist < 0.05) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <Marker position={[position.lat, position.lng]} icon={busIcon}>
      <Popup>Bus</Popup>
    </Marker>
  );
}
