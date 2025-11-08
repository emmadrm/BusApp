import React from "react";
import Store from "../components/Store";
import grigorisImg from "../assets/stores/grigoris.png";
import everestImg from "../assets/stores/everest.png";
import mikelImg from "../assets/stores/mikel.png";
import mcdonaldsImg from "../assets/stores/mcdonalds.jpg";
import ilovesouvlakiImg from "../assets/stores/ilovesouvlaki.png";
import goodysImg from "../assets/stores/goodys.png";

function Delivery() {
    return (
        <div>
            <Store name="Grigoris" logo={grigorisImg} category="Coffee & snacks" time="Delivery time: 10-15 min" offer="Free delivery for orders over $15" />
            <Store name="Everest" logo={everestImg} category="Cofee & sandwiches" time="Delivery time: 20-30 min" offer="1 + 1 Coffee of your choice" />
            <Store name="Mikel" logo={mikelImg} category="Specialty Coffees" time="Delivery time: 15-25 min" offer="Free delivery for orders over $10" />
            <Store name="McDonalds" logo={mcdonaldsImg} category="Burgers & Fries" time="Delivery time: 30-40 min" offer="2 Burgers only for 3$ " />
            <Store name="I Love Souvlaki" logo={ilovesouvlakiImg} category="Greek Souvlaki" time="Delivery time: 20-30 min" offer="Free delivery for orders over $20" />
            <Store name="Goody's" logo={goodysImg} category="Burgers & Nuggets" time="Delivery time: 25-35 min" offer="1 Free Drink with every Burger" />
        </div>
    );
}

export default Delivery;