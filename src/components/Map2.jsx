import React, { useEffect, useState } from "react";

import busPng from "../leaflet/bus.png";
import food from "../leaflet/food.png";
import sights from "../leaflet/sights.png";
import busStation from "../leaflet/busStation.png";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  Navigation,
  MapPin,
  Bus,
  Utensils,
  Camera,
  ArrowRight,
} from "lucide-react";

const busIcon = new L.Icon({
  iconUrl: busPng,
  iconSize: [30, 30],
  iconAnchor: [20, 20],
});
const sightsIcon = new L.Icon({
  iconUrl: sights,
  iconSize: [30, 30],
  iconAnchor: [20, 20],
});
const foodIcon = new L.Icon({
  iconUrl: food,
  iconSize: [30, 30],
  iconAnchor: [20, 20],
});
const stationIcon = new L.Icon({
  iconUrl: busStation,
  iconSize: [30, 30],
  iconAnchor: [20, 20],
});

const gpsData = [
  {
    city: "Athens",
    lat: 37.9838,
    lng: 23.7275,
    landscapes: [
      { name: "Acropolis", lat: 37.9715, lng: 23.725 },
      { name: "National Garden", lat: 37.975, lng: 23.736 },
      { name: "Plaka Hill", lat: 37.9758, lng: 23.729 },
    ],
    restaurants: [
      { name: "Taverna Ouzeri", lat: 37.982, lng: 23.728 },
      { name: "Kafenio Zorba", lat: 37.9845, lng: 23.732 },
      { name: "Athens Bites", lat: 37.981, lng: 23.734 },
    ],
  },
  {
    city: "Thessaloniki",
    lat: 40.6401,
    lng: 22.9444,
    landscapes: [
      { name: "White Tower", lat: 40.6395, lng: 22.944 },
      { name: "Aristotelous Square", lat: 40.632, lng: 22.945 },
      { name: "Ano Poli", lat: 40.648, lng: 22.9455 },
    ],
    restaurants: [
      { name: "Taverna Nikos", lat: 40.641, lng: 22.945 },
      { name: "Souvlaki Mania", lat: 40.642, lng: 22.9425 },
      { name: "Balkan Bistro", lat: 40.639, lng: 22.946 },
    ],
  },
  {
    city: "Patras",
    lat: 38.2466,
    lng: 21.7346,
    landscapes: [
      { name: "Rio Bridge View", lat: 38.245, lng: 21.735 },
      { name: "Patras Castle", lat: 38.248, lng: 21.732 },
      { name: "Georgiou Square", lat: 38.246, lng: 21.736 },
    ],
    restaurants: [
      { name: "Patras Grill", lat: 38.247, lng: 21.734 },
      { name: "Mediterraneo Taverna", lat: 38.2455, lng: 21.737 },
      { name: "Baklava House", lat: 38.2465, lng: 21.733 },
    ],
  },
  {
    city: "Larissa",
    lat: 39.638,
    lng: 22.419,
    landscapes: [
      { name: "Larissa Castle Ruins", lat: 39.639, lng: 22.4175 },
      { name: "Pefkakia Park", lat: 39.637, lng: 22.42 },
      { name: "Platia K. Karamanli", lat: 39.6385, lng: 22.4215 },
    ],
    restaurants: [
      { name: "Taverna Stou Gerou", lat: 39.6385, lng: 22.418 },
      { name: "Larissa Souvlaki", lat: 39.6375, lng: 22.4205 },
      { name: "Ouzeri tou Nikou", lat: 39.639, lng: 22.421 },
    ],
  },
  {
    city: "Volos",
    lat: 39.3619,
    lng: 22.942,
    landscapes: [
      { name: "Pelion Viewpoint", lat: 39.363, lng: 22.944 },
      { name: "Volos Waterfront", lat: 39.361, lng: 22.94 },
      { name: "Dimotiko Park", lat: 39.3625, lng: 22.943 },
    ],
    restaurants: [
      { name: "Tsipouradiko Volou", lat: 39.3615, lng: 22.9415 },
      { name: "Seafood by the Port", lat: 39.362, lng: 22.9425 },
      { name: "Pelion Taverna", lat: 39.3635, lng: 22.9445 },
    ],
  },
];

function GPSRouting({ userPosition, destination, onRouteCalculated }) {
  const map = useMap();

  useEffect(() => {
    if (userPosition && destination) {
      const route = [
        [userPosition.lat, userPosition.lng],
        [destination.lat, destination.lng],
      ];

      const dist =
        Math.sqrt(
          Math.pow(destination.lat - userPosition.lat, 2) +
            Math.pow(destination.lng - userPosition.lng, 2)
        ) * 111; // Approximate km

      onRouteCalculated(dist);

      map.fitBounds(route, { padding: [50, 50] });
    }
  }, [userPosition, destination, map, onRouteCalculated]);

  if (!userPosition || !destination) return null;

  return (
    <Polyline
      positions={[
        [userPosition.lat, userPosition.lng],
        [destination.lat, destination.lng],
      ]}
      color="blue"
      weight={4}
      dashArray="10, 10"
    />
  );
}

export default function TouristGPSMap() {
  const [currentCity, setCurrentCity] = useState(null);
  const [busPosition, setBusPosition] = useState(null);
  const [userPosition, setUserPosition] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [routeDistance, setRouteDistance] = useState(null);

  useEffect(() => {
    const randomCity = gpsData[Math.floor(Math.random() * gpsData.length)];
    setCurrentCity(randomCity);
    setBusPosition({ lat: randomCity.lat, lng: randomCity.lng });
    setUserPosition({
      lat: randomCity.lat + 0.0005,
      lng: randomCity.lng + 0.0005,
    });
  }, []);

  const navigateTo = (place) => {
    setSelectedDestination(place);
  };

  const resetNavigation = () => {
    setSelectedDestination(null);
    setRouteDistance(null);
  };

  const resetAll = () => {
    setUserPosition(null);
    setSelectedDestination(null);
    setCurrentCity(null);
    setBusPosition(null);

    const randomCity = gpsData[Math.floor(Math.random() * gpsData.length)];
    setCurrentCity(randomCity);
    setBusPosition({ lat: randomCity.lat, lng: randomCity.lng });
    setUserPosition({
      lat: randomCity.lat + 0.0005,
      lng: randomCity.lng + 0.0005,
    });
  };

  const allCities = gpsData;

  return (
    <div className="relative w-full h-1/2">
      <div
        className="bg-white shadow-sm"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "10px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#1976d2",
            }}
          >
            Τουριστική Πλοήγηση GPS
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
        >
          <span
            style={{
              padding: "4px 8px",
              backgroundColor: "#e3f2fd",
              borderRadius: "4px",
              fontSize: "0.875rem",
              fontWeight: "600",
            }}
          >
            <MapPin
              style={{
                display: "inline",
                verticalAlign: "middle",
                marginRight: "4px",
              }}
              size={14}
            />
            {currentCity?.city}
          </span>

          {selectedDestination ? (
            <>
              <span
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#e8f5e9",
                  border: "1px solid #81c784",
                  borderRadius: "4px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                <Navigation
                  style={{
                    display: "inline",
                    verticalAlign: "middle",
                    marginRight: "4px",
                  }}
                  size={14}
                />
                {selectedDestination.name}
                {routeDistance && ` (~${(routeDistance * 1000).toFixed(0)}m)`}
              </span>
              <button
                onClick={resetNavigation}
                style={{
                  padding: "2px 8px",
                  backgroundColor: "#ffebee",
                  color: "#d32f2f",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                Ακύρωση
              </button>
            </>
          ) : (
            <>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {currentCity?.landscapes.map((l, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigateTo(l)}
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "white",
                      border: "1px solid #81c784",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                    }}
                  >
                    <Camera
                      style={{
                        display: "inline",
                        verticalAlign: "middle",
                        marginRight: "4px",
                      }}
                      size={12}
                    />
                    {l.name}
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {currentCity?.restaurants.map((r, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigateTo(r)}
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "white",
                      border: "1px solid #ff9800",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                    }}
                  >
                    <Utensils
                      style={{
                        display: "inline",
                        verticalAlign: "middle",
                        marginRight: "4px",
                      }}
                      size={12}
                    />
                    {r.name}
                  </button>
                ))}
              </div>

              <select
                onChange={(e) => {
                  if (e.target.value) {
                    const city = allCities.find(
                      (c) => c.city === e.target.value
                    );
                    navigateTo({
                      name: `Στάση ${city.city}`,
                      lat: city.lat,
                      lng: city.lng,
                    });
                  }
                }}
                style={{
                  padding: "4px 8px",
                  backgroundColor: "white",
                  border: "1px solid #2196f3",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Άλλες Στάσεις
                </option>
                {allCities
                  .filter((city) => city.city !== currentCity?.city)
                  .map((city, idx) => (
                    <option key={idx} value={city.city}>
                      {city.city}
                    </option>
                  ))}
              </select>
            </>
          )}

          <button
            onClick={resetAll}
            style={{
              padding: "4px 12px",
              backgroundColor: "#9e9e9e",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "0.75rem",
              cursor: "pointer",
              marginLeft: "auto",
            }}
          >
            Επαναφορά
          </button>
        </div>
      </div>

      <MapContainer center={[38.5, 23.0]} zoom={7} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {busPosition && (
          <Marker position={[busPosition.lat, busPosition.lng]} icon={busIcon}>
            <Popup>
              <div className="text-center">
                <p className="font-bold">Τουριστικό Λεωφορείο</p>
                <p className="text-sm">{currentCity?.city}</p>
              </div>
            </Popup>
          </Marker>
        )}

        {allCities.map((city, idx) => (
          <Marker key={idx} position={[city.lat, city.lng]} icon={stationIcon}>
            <Popup>
              <div>
                <p className="font-bold text-blue-600">Στάση: {city.city}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {currentCity?.landscapes.map((landmark, idx) => (
          <Marker
            key={`land-${idx}`}
            position={[landmark.lat, landmark.lng]}
            icon={sightsIcon}
          >
            <Popup>
              <div>
                <p className="font-bold text-green-600">{landmark.name}</p>
                <p className="text-xs text-gray-600">{currentCity.city}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {currentCity?.restaurants.map((restaurant, idx) => (
          <Marker
            key={`rest-${idx}`}
            position={[restaurant.lat, restaurant.lng]}
            icon={foodIcon}
          >
            <Popup>
              <div>
                <p className="font-bold text-orange-600">{restaurant.name}</p>
                <p className="text-xs text-gray-600">{currentCity.city}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {userPosition && (
          <Marker position={[userPosition.lat, userPosition.lng]}>
            <Popup>
              <p className="font-bold text-purple-600">Η θέση σας</p>
            </Popup>
          </Marker>
        )}

        {userPosition && selectedDestination && (
          <GPSRouting
            userPosition={userPosition}
            destination={selectedDestination}
            onRouteCalculated={setRouteDistance}
          />
        )}
      </MapContainer>
    </div>
  );
}
