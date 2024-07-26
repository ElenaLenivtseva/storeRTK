import React from "react";
import TotalCart from "./Common/TotalCart";
import Overview from "./Types/Overview";
import "./CartContent.scss";
import Confirmation from "./Types/Confirmation";

const CartContent = () => {
  return (
    <div className="wrap">
      <div className="cartContent">
       <Confirmation/>
        <TotalCart />
      </div>
    </div>
  );
};

export default CartContent;
