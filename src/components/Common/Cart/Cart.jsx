import React from "react";
import Button from "../Button/Button";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { closeIcon } from "../../icons";

const cartCards = [
  {
    id: 1,
    title: "Noir V Neck Wrap Blouse",
    img: [
      "https://img.ltwebstatic.com/images3_pi/2023/07/15/1689355312b07e31dacd0d30b161770bff88f0c3a6_thumbnail_720x_thumbnail_720x.jpg",
    ],
    price: 420,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { colorText: "noir", colorCode: "#000", active: true },
      { colorText: "beige", colorCode: "#FFE4B5", active: false },
    ],
    amount: 1,
  },
  {
    id: 2,
    title: "Noir V Neck Wrap Blouse",
    img: [
      "https://img.ltwebstatic.com/images3_pi/2023/07/15/1689355312b07e31dacd0d30b161770bff88f0c3a6_thumbnail_720x_thumbnail_720x.jpg",
    ],
    price: 420,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { colorText: "noir", colorCode: "#000", active: true },
      { colorText: "beige", colorCode: "#FFE4B5", active: false },
    ],
    amount: 1,
  },
  {
    id: 3,
    title: "Noir V Neck Wrap Blouse",
    img: [
      "https://img.ltwebstatic.com/images3_pi/2023/07/15/1689355312b07e31dacd0d30b161770bff88f0c3a6_thumbnail_720x_thumbnail_720x.jpg",
    ],
    price: 420,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { colorText: "noir", colorCode: "#000", active: true },
      { colorText: "beige", colorCode: "#FFE4B5", active: false },
    ],
    amount: 1,
  },
  {
    id: 4,
    title: "Noir V Neck Wrap Blouse",
    img: [
      "https://img.ltwebstatic.com/images3_pi/2023/07/15/1689355312b07e31dacd0d30b161770bff88f0c3a6_thumbnail_720x_thumbnail_720x.jpg",
    ],
    price: 420,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { colorText: "noir", colorCode: "#000", active: true },
      { colorText: "beige", colorCode: "#FFE4B5", active: false },
    ],
    amount: 1,
  }

    
];

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__header">
        <h4 className="cart__title">Cart [{cartCards.length} items]</h4>
        {closeIcon}
      </div>

      <div className="cart__cardsWrap">
        {cartCards.map((item, index) => {
          return <CartItem card={item} key={index} />;
        })}
      </div>
      <div className="cart__total">
        <p className="cart__totalText">Subtotal</p>
        <p className="cart__totalPrice">750$</p>
      </div>
      <Button className="button button_totalBlack cart__buttonGo">Go to Checkout</Button>
      <Button className="button button_totalBlack">
        Continue Shopping
      </Button>
    </div>
  );
};

export default Cart;
