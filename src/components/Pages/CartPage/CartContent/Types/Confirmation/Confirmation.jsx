import React from "react";
import CartItem from "../../../../../Common/Cart/CartItem/CartItem";
import OrderDetail from "./OrderDetail";
import "./Confirmation.scss";

const order = {
  id: "SSPM112511277",
  date: "July 23, 2024",
  products: [
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
  ],
};

const info = [
  {
    title: "Shipping Information",
    blocks: [
      {
        subtitle: "Address",
        texts: [
          "Chloe Nicker",
          "80 Greene St.",
          "New York, NY 10012, US",
          "chloenicker@gmail.ru",
          "+ 1 212-531-3248",
        ],
      },
      {
        subtitle: "Delivery Speed",
        texts: ["Arrives in 3-5 business days"],
      },
    ],
  },
  {
    title: "Payment Information",
    blocks: [
      {
        subtitle: "Payment Method",
        texts: [
          "5389 **** **** ****",
        ],
      },
    ],
  },
];
const Confirmation = () => {
  return (
    <div className="confirmation">
      <h3 className="subtitle subtitle_sm confirmation__title">
        Your Order Was Placed Successfully!
      </h3>
      <div className="confirmation__orderInfo">
        <p className="confirmation__infoText">
          Order Number: <span className="confirmation__span">{order.id}</span>
        </p>
        <p className="confirmation__infoText">
          Order Date: <span className="confirmation__span">{order.date}</span>
        </p>
      </div>
      <p className="confirmation__note">
        For complete overview o your order, please review the email we sent you.
      </p>
      <div className="confirmation__orderedItems">
        <h3 className="subtitle subtitle_sm confirmation__title">
          Ordered Items
        </h3>
        <div className="confirmation__orderedWrap">
          {order.products.map((item) => {
            return (
              <CartItem card={item} key={item.id} purpose="orderConfirm"/>
            );
          })}
        </div>
      </div>
      <div className="confirmation__orderDetails">
        {info.map((item,index)=>{
          return (
            <OrderDetail info={item} key={index}/>
          )
        })}
      </div>
    </div>
  );
};

export default Confirmation;
