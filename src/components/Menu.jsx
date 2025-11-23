import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Item from "./Item.jsx";
import CoffeeImg from "../assets/MenuItems/espresso.jpg";
import FreddoImg from "../assets/MenuItems/FreddoEspresso.jpg";
import JuiceImg from "../assets/MenuItems/juice.jpg";
import CookieImg from "../assets/MenuItems/cookie.jpg";
import SandwichImg from "../assets/MenuItems/sandwich.jpg";
import CroissantImg from "../assets/MenuItems/croissant.png";

function Menu(props) {
  const location = useLocation();
  const state = location.state || {};
  const storeName = state.storeName;
  const logo = state.logo;

  const Items = [
    { name: "Classic Espresso", price: "2.50€", image: CoffeeImg },
    { name: "Freddo Espresso", price: "3.00€", image: FreddoImg },
    { name: "Orange Juice", price: "2.00€", image: JuiceImg },
    { name: "Chocolate Chip Cookie", price: "1.50€", image: CookieImg },
    { name: "Ham & Cheese Sandwich", price: "4.00€", image: SandwichImg },
    { name: "Butter Croissant", price: "1.80€", image: CroissantImg },
  ];

  const cartItems = [];
  const [itemsNumber, setItemsNumber] = useState(0);
  const [itemsPrice, setItemsPrice] = useState(0);

  const addItem = (item) => {
    cartItems.push(item);
    setItemsNumber(itemsNumber + 1);
    setItemsPrice((prevPrice) => prevPrice + parseFloat(item.price));
  };

  const CheckoutState = {
    Cart: cartItems,
    TotalPrice: itemsPrice,
  };

  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <img
              className="menu-logo"
              src={logo}
              alt={`${storeName} logo`}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="album py-5 mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {Items.map((item, index) => (
              <Item
                key={index}
                ItemName={item.name}
                image={item.image}
                price={item.price}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
      </div>
      <Link to="/checkout" state={CheckoutState}>
        <button id="cart" type="button" hidden={itemsNumber === 0}>
          <span className="circle left">{itemsNumber}</span>
          <span className="cart-label">Προβολή Καλαθιού</span>
          <span className="circle right" id="price">
            {itemsPrice}€
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Menu;
