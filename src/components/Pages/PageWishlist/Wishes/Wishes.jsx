import React from "react";
import "./Wishes.scss";
import CartItem from "../../../Common/Cart/CartItem/CartItem";

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
  },
];
const Wishes = () => {
  return (
    <div className="wishes">
      <div className="wrap">
        <div className="subtitle wishes__title">Your wishlist</div>
        <div className="wishes__wrap">
          {cartCards.map((item) => {
            return <CartItem card={item} key={item.id} purpose='wishlist'/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Wishes;
