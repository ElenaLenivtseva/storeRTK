import React from "react";
import TotalCart from '../CartContent/Common/TotalCart/TotalCart'
import Overview from "./Types/Overview";
import "./CartContent.scss";
import Payment from "./Types/Payment";

const CartContent = () => {
  return (
    <div className="wrap">
      <div className="cartContent">
        <Payment/>
        <TotalCart />
      </div>
    </div>
  );
};

export default CartContent;
