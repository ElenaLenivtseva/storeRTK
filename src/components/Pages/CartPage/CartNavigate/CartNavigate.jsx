import React from "react";
import "./CartNavigate.scss";

const CartNavigate = () => {
  return (
    <div className="wrap">
      <div className="cartNav">
        <div className="cartNav__line"></div>
        <div className="cartNav__items">
          <div className="cartNav__item">
            <p className="cartNav__title">Overview</p>
            <div className="cartNav__circle cartNav__active">1</div>
          </div>
          <div className="cartNav__item">
            <p className="cartNav__title">Shipping</p>
            <div className="cartNav__circle">2</div>
          </div>
          <div className="cartNav__item">
            <p className="cartNav__title">Payment</p>
            <div className="cartNav__circle">3</div>
          </div>
          <div className="cartNav__item">
            <p className="cartNav__title">Confirmation</p>
            <div className="cartNav__circle">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartNavigate;
