import React, { useState, useEffect } from "react";

function ControlCentre() {
  const [location, setLocation] = useState(null);
  const [termperature, setTermperature] = useState(null);
  const [error, setError] = useState(null);
  const [control, setControl] = useState("off");
  const [region, setRegion] = useState(null);
  const [weatherCode, setWeatherCode] = useState(null);
  const [roof, setRoof] = useState("closed");
  const [solarPower, setSolarPower] = useState(0);
  const [storedEnergy, setStoredEnergy] = useState(0);
  const [consumptionRate, setConsumptionRate] = useState(100);
  const [previousRate, setPreviousRate] = useState(null);
  const [totalEnergySaved, setTotalEnergySaved] = useState(0);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  useEffect(() => {
    if (!location) return;
    const fetchTemperature = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.long}&current_weather=true`
        );
        const data = await response.json();
        setTermperature(Math.round(data.current_weather.temperature));
        setWeatherCode(data.current_weather.weathercode);
      } catch {
        setError("Failed to fetch temperature data");
      }
    };
    fetchTemperature();
  }, [location]);

  useEffect(() => {
    if (!location) return;
    const fetchRegion = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.long}`
        );
        const data = await response.json();
        const suburb =
          data.address?.suburb ||
          data.address?.city ||
          data.address?.town ||
          "Unknown";
        const state = data.address?.state || "Unknown";
        setRegion(`${suburb}, ${state}`);
      } catch {
        setRegion("Unable to fetch location");
      }
    };
    fetchRegion();
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      let production;

      if (weatherCode === 0) {
        production = 800;
      } else if (weatherCode <= 3) {
        production = 500;
      } else if (weatherCode >= 80 && weatherCode <= 82) {
        production = 100;
      } else if (weatherCode >= 51 && weatherCode <= 67) {
        production = 200;
      } else if (weatherCode >= 95) {
        production = 50;
      } else {
        production = 300;
      }

      setSolarPower(production);
      setStoredEnergy((prev) => prev + production / 3600);
    }, 1000);

    return () => clearInterval(interval);
  }, [weatherCode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStoredEnergy((prev) => Math.max(0, prev - consumptionRate / 3600));
    }, 1000);

    return () => clearInterval(interval);
  }, [consumptionRate]);

  useEffect(() => {
    setPreviousRate(consumptionRate);

    let newRate;
    if (control === "cooling") newRate = 450;
    else if (control === "heating") newRate = 600;
    else newRate = 120;

    setConsumptionRate(newRate);
  }, [control]);

  useEffect(() => {
    if (previousRate === null) return;
    if (previousRate <= consumptionRate) return;

    const interval = setInterval(() => {
      const diff = previousRate - consumptionRate;
      setTotalEnergySaved((prev) => prev + diff / 3600);
    }, 1000);

    return () => clearInterval(interval);
  }, [previousRate, consumptionRate]);

  const handleChange = (climateControl) => {
    if (climateControl === "cooling") {
      setControl(control === "cooling" ? "off" : "cooling");
    } else if (climateControl === "heating") {
      setControl(control === "heating" ? "off" : "heating");
    }
  };

  useEffect(() => {
    if (weatherCode === 0) {
      setRoof("open");
    } else if (weatherCode >= 80) {
      setRoof("closed");
    } else {
      setRoof("open");
    }
  }, [weatherCode]);

  const getWeatherCondition = (code) => {
    if (code === 0) return "Clear / Sunny";
    if (code === 1 || code === 2 || code === 3) return "Partly Cloudy";
    if (code >= 45 && code <= 48) return "Fog / Mist";
    if (code >= 51 && code <= 67) return "Drizzle / Light Rain";
    if (code >= 71 && code <= 77) return "Snow";
    if (code >= 80 && code <= 82) return "Rain Showers";
    if (code >= 95) return "Thunderstorm";
    return "Unknown";
  };

  return (
  <div className="control-centre-page">
    <div className="control-card">
      {error && <p className="error-text">Error: {error}</p>}

      {!error && (
        <>
          <h2 className="control-title">Control Centre</h2>

          <h1
            className={`temperature ${
              termperature < 15 ? "cold" : termperature > 25 ? "hot" : "normal"
            }`}
          >
            {termperature || "Loading..."}°C
          </h1>

          <p className="region">📍 {region || "Loading location..."}</p>

          <div className="climate-controls">
            <button
              className={`climate-btn ${
                control === "cooling" ? "active-cooling" : ""
              }`}
              onClick={() => handleChange("cooling")}
            >
              ❄️ Cooling
            </button>

            <button
              className={`climate-btn ${
                control === "heating" ? "active-heating" : ""
              }`}
              onClick={() => handleChange("heating")}
            >
              🔥 Heating
            </button>
          </div>

          <div className="stats-grid">
            <div className="stat">
              <span>Panels producing</span>
              <b>{solarPower} W</b>
            </div>

            <div className="stat">
              <span>Battery stored</span>
              <b>{storedEnergy.toFixed(2)} Wh</b>
            </div>

            <div className="stat">
              <span>Bus consuming</span>
              <b>{consumptionRate} W</b>
            </div>

            <div className="stat">
              <span>Total energy saved</span>
              <b>{totalEnergySaved.toFixed(2)} Wh</b>
            </div>
          </div>

          <div className="info-box">
            <p>
              <b>Weather condition:</b>{" "}
              {weatherCode !== null
                ? getWeatherCondition(weatherCode)
                : "Loading..."}
            </p>

            <p>
              <b>Ceiling (roof) status:</b>{" "}
              {roof === "open"
                ? "Roof working — solar panels active"
                : "Roof deactivated — panels limited"}
            </p>
          </div>
        </>
      )}
    </div>
  </div>


  );
}
export default ControlCentre;
