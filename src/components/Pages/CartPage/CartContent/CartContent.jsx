import React from "react";
import TotalCart from '../CartContent/Common/TotalCart/TotalCart'
import Overview from "./Types/Overview/Overview";
import "./CartContent.scss";
import Payment from "./Types/Payment/Payment";
import Shipping from "./Types/Shipping/Shipping";

const CartContent = () => {
  return (
    <div className="wrap">
      <div className="cartContent">
        <Shipping/>
        <TotalCart />
      </div>
    </div>
  );
};

export default CartContent;
