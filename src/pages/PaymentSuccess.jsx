import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const storeName = searchParams.get("storeName");
  console.log(storeName);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-5 text-center shadow"
        style={{ maxWidth: "400px" }}
      >
        <div className="mb-4">
          <i
            className="bi bi-check-circle-fill text-success"
            style={{ fontSize: "3rem" }}
          ></i>
        </div>
        <h2 className="mb-3">Order submitted!</h2>
        <p className="text-muted">Το καταστημα ετοιμαζει την παραγγελια σου.</p>
        <button
          className="btn btn-light fw-bold mt-4"
          style={{
            padding: "12px 20px",
            borderRadius: "12px",
            border: "2px solid #ddd",
          }}
          onClick={() => navigate("/map", { state: { StoreName: storeName } })}
        >
          Ωρα και σημειο παραλαβης
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
