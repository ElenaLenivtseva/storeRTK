import React from "react";
import { openArrowIcon } from "../../../../icons";
import OrderProduct from "./OrderProduct";

const orders = [
  {
    id: 1,
    title: "Chic Shoes",
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_SANDALS_CREAM_FLOWER_RED_01_37e4370d-d3f7-4dbb-91c8-1897fe2ef83e.jpg?v=1713975584&width=768&crop=center",
    date: "July 7, 2024",
    status: "In Progress",
    amount: 1,
    price: 420,
  },
  {
    id: 2,
    title: "Elegant Swimsuit",
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_SWIMSUIT_01_BLACK_01.jpg?v=1706569090&width=768&crop=center",
    date: "Aug 11, 2023",
    status: "Recieved",
    amount: 2,
    price: 310,
  },
];

const Orders = () => {
  return (
    <div className="accountContent">
      <div className="accountContent__top">
        <h3 className="accountContent__title">My Orders</h3>
        <div className="accountContent__filter">
          <p className="accountContent__filterText">All</p>
          {openArrowIcon}
        </div>
      </div>

      {orders.map((product) => {
        return <OrderProduct key={product.id} info={product} />;
      })}
    </div>
  );
};

export default Orders;
