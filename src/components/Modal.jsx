import React from "react";

export default function Modal({ message }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#E6E6DC",
        padding: "20px",
        border: "2px solid #333",
        borderRadius: "8px",
        zIndex: 1000,
      }}
    >
      <p>{message}</p>
    </div>
  );
}
