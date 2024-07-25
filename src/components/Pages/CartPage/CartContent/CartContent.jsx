import React from "react";
import TotalCart from "./Common/TotalCart";
import Overview from "./Types/Overview";
import "./CartContent.scss";

const CartContent = () => {
  return (
    <div className="wrap">
      <div className="cartContent">
        <Overview />
        <TotalCart />
      </div>
    </div>
  );
};

export default CartContent;
