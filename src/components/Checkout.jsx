import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import convertToSub from "../lib/convertToSub";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import { meta } from "@eslint/js";

function Checkout(props) {
  const location = useLocation();
  const state = location.state || {};
  const cart = state.Cart;
  const storeName = state.StoreName;
  const totalPrice = Number(state.TotalPrice) || 0;

  console.log(totalPrice);

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: convertToSub(totalPrice) }),
    })
      .then((res) => res.json())
      .then(({ clientSecret }) => {
        setClientSecret(clientSecret);
      });
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutPage amount={totalPrice} storeName={storeName} />
        </Elements>
      )}
    </>
  );
}

export default Checkout;
