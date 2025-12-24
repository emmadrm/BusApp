import React from 'react';

const Speedometer = ({ speed }) => {
  const getSpeedColor = (speed) => {
    if (speed <= 40) return '#69c769'; // green
    if (speed <= 60) return '#d8a23f'; // orange
    return '#b62f2f'; // red
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <svg width="300" height="180" viewBox="0 0 300 180">
        <path d="M 50 150 A 100 100 0 0 1 250 150" fill="none" stroke="#333" strokeWidth="15" />
        <path
          d={`M 50 150 A 100 100 0 0 1 ${50 + 200 * (speed / 80)} ${150 - 100 * Math.sin((speed / 80) * Math.PI)}`}
          fill="none"
          stroke={getSpeedColor(speed)}
          strokeWidth="15"
          strokeLinecap="round"
        />
        {[0, 20, 40, 60, 80].map((mark) => {
          const angle = (mark / 80) * Math.PI;
          const x1 = 150 + 85 * Math.cos(angle - Math.PI);
          const y1 = 150 + 85 * Math.sin(angle - Math.PI);
          const x2 = 150 + 95 * Math.cos(angle - Math.PI);
          const y2 = 150 + 95 * Math.sin(angle - Math.PI);
          return (
            <line key={mark} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="2" />
          );
        })}
        <text x="50" y="165" textAnchor="middle" fontSize="14" fill="#fff">0</text>
        <text x="150" y="55" textAnchor="middle" fontSize="14" fill="#fff">40</text>
        <text x="250" y="165" textAnchor="middle" fontSize="14" fill="#fff">80</text>
        <line
          x1="150"
          y1="150"
          x2="150"
          y2="70"
          stroke="#ff0000"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${(speed / 80) * 180 - 90} 150 150)`}
        />
        <circle cx="150" cy="150" r="5" fill="#fff" />
        <text x="150" y="120" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#fff">{speed}</text>
        <text x="150" y="140" textAnchor="middle" fontSize="14" fill="#fff">km/h</text>
      </svg>
    </div>
  );
};

export default Speedometer;