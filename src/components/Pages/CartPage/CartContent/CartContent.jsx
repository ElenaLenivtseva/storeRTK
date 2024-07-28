import React from "react";
import TotalCart from '../CartContent/Common/TotalCart/TotalCart'
import Overview from "./Types/Overview/Overview";
import "./CartContent.scss";
import Payment from "./Types/Payment/Payment";
import Shipping from "./Types/Shipping/Shipping";
import Confirmation from './Types/Confirmation/Confirmation'

const CartContent = () => {
  return (
    <div className="wrap_sm">
      <div className="cartContent">
        <Confirmation/>
        <TotalCart />
      </div>
    </div>
  );
};

export default CartContent;
