import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function DecisionCheckout(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const cart = state.Cart;
  const totalPrice = Number(state.TotalPrice) || 0;
  const storeName = state.StoreName;
  console.log(storeName);
  console.log(totalPrice);

  const goToCheckout2 = () => {
    navigate("/checkout2", { state });
  };

  const goToCheckout3 = () => {
    navigate("/map", { state });
  };

  return (
    <div className="flex-column-blur">
      <div className="sec-col-blur">
        <button className="checkout-btn" onClick={goToCheckout3}>
          ΜΕΤΡΗΤΑ ΚΑΤΑ ΤΗΝ ΠΑΡΑΔΟΣΗ
        </button>

        <button className="checkout-btn" onClick={goToCheckout2}>
          ΠΡΟΠΛΗΡΩΜΗ ΜΕ ΚΑΡΤΑ
        </button>
      </div>
    </div>
  );
}

export default DecisionCheckout;
