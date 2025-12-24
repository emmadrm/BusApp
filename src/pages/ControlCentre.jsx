import React, { useState, useEffect } from 'react';

function ControlCentre() {

    const [location, setLocation] = useState(null);
    const [termperature, setTermperature] = useState(null);
    const [error, setError] = useState(null);
    const [control, setControl] = useState("off");
    const [region, setRegion] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
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
            }catch {
                setError('Failed to fetch temperature data');
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
                const suburb = data.address?.suburb || data.address?.city || data.address?.town || 'Unknown';
                const state = data.address?.state || 'Unknown';
                setRegion(`${suburb}, ${state}`);
            } catch {
                setRegion('Unable to fetch location');
            }
        };
        fetchRegion();
    }, [location]);

    const handleChange = (climateControl) => {
        if (climateControl === 'cooling') {
            setControl(control === 'cooling' ? 'off' : 'cooling');
        } else if (climateControl === 'heating') {
            setControl(control === 'heating' ? 'off' : 'heating');
        }
    }

  return (
    <div className="control-centre">
        {error && <p>Error: {error}</p>}
        {!error && (
        <>
            <h2><b>Control Centre</b></h2>
            <h1 className={` ${termperature < 15 ? 'cold' : termperature > 25 ? 'hot' : 'normal'}`}>{termperature || 'Loading...'}°C</h1>
            <h3 className='region'>📍 {region || 'Loading location...'}</h3>
            <div className='AC'>
            <button className={`btn ${control === 'cooling' ? 'btn-primary' : 'btn-light'} me-2`}
            onClick={() => handleChange("cooling")}>
              ❄️ Cooling
            </button>
            <button className={`btn ${control === 'heating' ? 'btn-danger' : 'btn-light'} me-2`}
            onClick={() => handleChange("heating")}>
              🔥 Heating
            </button>
            </div>
        </>
        )}
    </div>
  );
}
export default ControlCentre;