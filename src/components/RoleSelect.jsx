import React from "react";
import { useNavigate } from "react-router-dom";

function RoleSelect() {
  const navigate = useNavigate();

  const selectRole = (role) => {
    localStorage.setItem("role", role);
    navigate("/home");
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg p-4 role-select">
        <div className="card-body text-center">
          <h3 className="mb-4 fw-bold">Επιλέξτε ρόλο</h3>

          <button className="btn btn-dark btn-lg w-100 mb-3" onClick={() => selectRole("passenger")} >
            Είμαι Επιβάτης
          </button>

          <button className="btn btn-light btn-lg w-100" onClick={() => selectRole("driver")} >
            Είμαι Οδηγός
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelect;
