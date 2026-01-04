import { useEffect, useRef, useState } from "react";
import Speedometer from "../components/Speedometer";
import { AlertTriangle, Coffee, Users, CheckCircle, Zap } from "lucide-react";

function Driving() {
  const [speed, setSpeed] = useState(30);
  const [laneWarning, setLaneWarning] = useState(false);
  const [tired, setTired] = useState(false);
  const [passengersExiting, setPassengersExiting] = useState(false);
  const [targetSpeed, setTargetSpeed] = useState(50);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const speedInterval = setInterval(() => {
      setSpeed(prevSpeed => {
        if (isIncreasing) {
          if (prevSpeed < targetSpeed) {
            return prevSpeed + 1;
          } else {
            setIsIncreasing(false);
            setTargetSpeed(Math.floor(Math.random() * 30)); // ταχυτητα 0-29
            return prevSpeed;
          }
        } else {
          if (prevSpeed > targetSpeed) {
            return prevSpeed - 1;
          } else {
            setIsIncreasing(true);
            setTargetSpeed(Math.floor(40 + Math.random() * 40)); // ταχυτητα 40-80
            return prevSpeed;
          }
        }
      });
    }, 200); 

    return () => clearInterval(speedInterval);
  }, [isIncreasing, targetSpeed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLaneWarning(Math.random() < 0.9);
      setTired(Math.random() < 0.2);
      setPassengersExiting(Math.random() < 0.3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="driving-page">
      <h1>Driving Assistance</h1>

      <Speedometer speed={speed} />

      <div className="alerts">

        {speed > 60 && (
          <div className="alert critical" style={{ display: 'flex', alignItems: 'center', padding: '15px', background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)', borderRadius: '10px', color: '#fff', boxShadow: '0 4px 15px rgba(255,107,107,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Zap size={28} style={{ marginRight: '15px' }} />
            <span style={{ fontWeight: 'bold' }}>Υπέρβαση ορίου ταχύτητας</span>
          </div>
        )}

        {laneWarning && (
          <div className="alert critical" style={{ display: 'flex', alignItems: 'center', padding: '15px', background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)', borderRadius: '10px', color: '#fff', boxShadow: '0 4px 15px rgba(255,107,107,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <AlertTriangle size={28} style={{ marginRight: '15px' }} />
            <span style={{ fontWeight: 'bold' }}>Απόκλιση από τη λωρίδα</span>
          </div>
        )}

        {passengersExiting && (
          <div className="alert warning" style={{ display: 'flex', alignItems: 'center', padding: '15px', background: 'linear-gradient(135deg, #ffa726, #fb8c00)', borderRadius: '10px', color: '#fff', boxShadow: '0 4px 15px rgba(255,167,38,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Users size={28} style={{ marginRight: '15px' }} />
            <span style={{ fontWeight: 'bold' }}>Επιβάτες κατεβαίνουν – εκκίνηση μπλοκάρεται</span>
          </div>
        )}

        {tired && (
          <div className="alert info" style={{ display: 'flex', alignItems: 'center', padding: '15px', background: 'linear-gradient(135deg, #42a5f5, #1976d2)', borderRadius: '10px', color: '#fff', boxShadow: '0 4px 15px rgba(66,165,245,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Coffee size={28} style={{ marginRight: '15px' }} />
            <span style={{ fontWeight: 'bold' }}>Σκεφτείτε καφέ</span>
          </div>
        )}

        {!laneWarning && speed <= 60 && !tired && !passengersExiting && (
          <div className="alert ok" style={{ display: 'flex', alignItems: 'center', padding: '15px', background: 'linear-gradient(135deg, #66bb6a, #388e3c)', borderRadius: '10px', color: '#fff', boxShadow: '0 4px 15px rgba(102,187,106,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <CheckCircle size={28} style={{ marginRight: '15px' }} />
            <span style={{ fontWeight: 'bold' }}>Οδήγηση ομαλά</span>
          </div>
        )}

      </div>
    </div>
  );
}

export default Driving;
