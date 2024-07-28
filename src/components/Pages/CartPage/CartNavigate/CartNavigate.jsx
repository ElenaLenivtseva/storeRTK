import React from "react";
import "./CartNavigate.scss";
import CartNavItem from "./CartNavItem";

const CartNavigate = () => {
  return (
    <div className="wrap">
      <div className="cartNav">
        <div className="cartNav__line"></div>
        <div className="cartNav__items">
          <CartNavItem title='Overview' number='1' />
          <CartNavItem title='Shipping' number='2'/>
          <CartNavItem title='Payment' number='3' active='true'/>
          <CartNavItem title='Confirmation' number='4'/>
        </div>
      </div>
    </div>
  );
};

export default CartNavigate;
