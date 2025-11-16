import React from "react";
import { useLocation } from "react-router-dom";

function Checkout(props) {

    const location = useLocation();
    const state = location.state || {};
    const cart = state.Cart ;
    const totalPrice = state.TotalPrice ;

    return (
        <div>
            <h2>Checkout Page {totalPrice}</h2>
        </div>
    );
}

export default Checkout;