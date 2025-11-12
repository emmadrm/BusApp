import { useState, useEffect } from "react";
import "../Vacuum.css";
import { Bot } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import broom from "../assets/broom.png";
const TRASH_TYPES = [
  { name: "jewelry", color: "#d4af37", size: 8 },
  { name: "passport", color: "#4a4e69", size: 10 },
  { name: "idCard", color: "#588157", size: 10 },
  { name: "toy", color: "#e07a5f", size: 12 },
  { name: "paper", color: "#f2e9e4", size: 6 },
];

export default function Vacuum() {
  const [trashItems, setTrashItems] = useState([]);
  const [cleanedAreas, setCleanedAreas] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [cleanType, setCleanType] = useState("Quick");
  const [cleanTime, setCleanTime] = useState(5);
  const [robotPos, setRobotPos] = useState({ x: 160, y: 620 });
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const newTrash = Array.from({ length: 10 }).map(() => {
      const t = TRASH_TYPES[Math.floor(Math.random() * TRASH_TYPES.length)];
      return {
        ...t,
        id: Math.random(),
        x: Math.random() * 280 + 20,
        y: Math.random() * 580 + 20,
      };
    });
    setTrashItems(newTrash);
  }, []);

  const handleClick = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 320;
    const y = ((e.clientY - rect.top) / rect.height) * 640;

    setModalData({ x, y });
  };

  const startCleaning = () => {
    if (!modalData) return;

    setModalData(null);
    setMoving(true);

    const targetX = modalData.x;
    const targetY = modalData.y;
    const steps = 100;
    let step = 0;

    const dx = (targetX - robotPos.x) / steps;
    const dy = (targetY - robotPos.y) / steps;

    const interval = setInterval(() => {
      step++;
      setRobotPos((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
      if (step >= steps) {
        clearInterval(interval);

        const delaySeconds = cleanTime === 10 ? 1 : cleanTime === 20 ? 3 : 5;

        setTimeout(() => {
          setTrashItems((prev) => {
            const removed = prev.filter(
              (t) => Math.hypot(t.x - targetX, t.y - targetY) <= 30
            );

            const remaining = prev.filter(
              (t) => Math.hypot(t.x - targetX, t.y - targetY) > 30
            );

            const lostValuables = removed.filter((t) =>
              ["jewelry", "passport", "idCard"].includes(t.name)
            );

            if (lostValuables.length > 0) {
              toast.error(
                `⚠️ Alert: Βρεθηκε χαμενο αντικειμενο αξιας απο επιβατη: (${lostValuables
                  .map((t) => t.name)
                  .join(", ")}).`,
                { position: "top-right", autoClose: 5000 }
              );
            }

            return remaining;
          });

          setCleanedAreas((prev) => [
            ...prev,
            { x: targetX, y: targetY, id: Math.random() },
          ]);

          setRobotPos({ x: 160, y: 620 });
          setMoving(false);
        }, delaySeconds * 1000);
      }
    }, 30);
  };

  return (
    <div className="vacuum-page">
      <div className="container">
        <h1 className="title">
          <img
            src={broom}
            alt="Bus icon"
            style={{
              width: "39px",
              height: "39px",
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          />
          Bus Cleaning Control
        </h1>

        <p>
          Click any dirty area in the bus to send the robot vacuum to clean that
          area.
        </p>
        <p className="pal">If something of value is found you get an alert.</p>
        <div className="bus-wrapper">
          <svg
            className="bus"
            viewBox="0 0 320 640"
            width="320"
            height="640"
            onClick={handleClick}
          >
            {/* Bus body */}
            <rect
              x="10"
              y="10"
              width="300"
              height="620"
              rx="20"
              fill="#d2b48c"
              stroke="#222"
              strokeWidth="2"
            />

            {/* Aisle */}
            <rect
              x="140"
              y="40"
              width="40"
              height="560"
              fill="#a67c52"
              opacity="0.7"
            />

            {/* Seats */}
            {[...Array(5)].map((_, row) => (
              <g key={row}>
                {/* Left side seats */}
                <rect
                  x="20"
                  y={60 + row * 100}
                  width="50"
                  height="60"
                  rx="10"
                  fill="#4b3f34"
                />
                <rect
                  x="80"
                  y={60 + row * 100}
                  width="50"
                  height="60"
                  rx="10"
                  fill="#4b3f34"
                />

                {/* Right side seats */}
                <rect
                  x="190"
                  y={60 + row * 100}
                  width="50"
                  height="60"
                  rx="10"
                  fill="#4b3f34"
                />
                <rect
                  x="250"
                  y={60 + row * 100}
                  width="50"
                  height="60"
                  rx="10"
                  fill="#4b3f34"
                />
              </g>
            ))}

            {/* Driver seat */}
            <rect x="50" y="10" width="60" height="30" rx="5" fill="#333" />
            <circle cx="70" cy="25" r="10" fill="#555" />

            {/* Trash items */}
            {trashItems.map((t) => (
              <circle
                key={t.id}
                cx={t.x}
                cy={t.y}
                r={t.size / 2}
                fill={t.color}
                stroke="#000"
                strokeWidth="0.5"
              >
                <title>{t.name}</title>
              </circle>
            ))}

            {/* Cleaned markers */}
            {cleanedAreas.map((a) => (
              <circle
                key={a.id}
                cx={a.x}
                cy={a.y}
                r="20"
                fill="rgba(173,216,230,0.3)"
                stroke="#00f"
                strokeWidth="1"
              />
            ))}
          </svg>

          <div
            className="robot"
            style={{
              position: "absolute",
              left: `${robotPos.x}px`,
              top: `${robotPos.y}px`,
              transform: "translate(-50%, -50%)",
              transition: moving ? "none" : "transform 0.2s ease-out",
              zIndex: 10,
            }}
          >
            <Bot size={28} color={moving ? "#0af" : "#444"} />
          </div>
        </div>

        {modalData && (
          <div className="modal">
            <div className="modal-content">
              <h2>Set Cleaning Options</h2>
              <label>
                Cleaning Type:
                <select
                  value={cleanType}
                  onChange={(e) => setCleanType(e.target.value)}
                >
                  <option value="Quick">Σκουπισμα στεγνο</option>
                  <option value="Deep">Deep clean με καθαριστικο υγρο</option>
                  <option value="Seats">Ξεσκονισμα καθισματος</option>
                </select>
              </label>
              <label>
                Cleaning Time (minutes):
                <select
                  value={cleanTime}
                  onChange={(e) => setCleanTime(Number(e.target.value))}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </select>
              </label>
              <button onClick={startCleaning}>Start Cleaning</button>
              <button onClick={() => setModalData(null)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
