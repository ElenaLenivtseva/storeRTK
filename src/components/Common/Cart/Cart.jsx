import React from "react";
import Button from "../Button/Button";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { closeIcon } from "../../icons";

const cartCards = [
  {
    id: 1,
    title: "Cowl neck jersey midi dress in beige",
    img: [
      "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_DRESS_21_BEIGE_01_18080b90-ac82-4ba2-8f05-f4d0851207f5.jpg?v=1713974961&width=768&crop=center",
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
    title: "Ruched v neck bodysuit in cream print",
    img: [
      "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_BODYSUIT_01_CREAM_PRINT_01_383f9e22-a53b-474a-870a-82437e374334.jpg?v=1713974519&width=768&crop=center",
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
    title: "Mohair mini skirt in caramel",
    img: [
      "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/RE24-KNITWEAR-12-SKIRT-CARAMEL_01.jpg?v=1700044915&width=768&crop=center",
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
    title: "Plunge halter jersey gown in cream",
    img: [
      "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_EXCLUSIVE_DRESS_02_CREAM_01.jpg?v=1719240886&width=768&crop=center",
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
      <div className="cart__subtotal">
        <p className="cart__subtotalText">Subtotal</p>
        <p className="cart__subtotalPrice">750$</p>
      </div>
      <Button className="button button_totalBlack cart__buttonGo">Go to Checkout</Button>
    </div>
  );
};

export default Cart;
