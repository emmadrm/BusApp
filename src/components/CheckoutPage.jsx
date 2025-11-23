import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import convertToSub from "../lib/convertToSub";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
  };

  const handleSubmit2 = () => {
    navigate("/completion");
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <>
        <PaymentElement />
        <button
          disabled={loading || !stripe}
          className="payment-btn"
          onClick={handleSubmit2}
        >
          <span>{!loading ? `Pay: ${amount}€ ` : "Processing..."}</span>
        </button>
      </>
    </form>
  );
};
export default CheckoutPage;
