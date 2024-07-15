import React from "react";
import { cartArrowIcon } from "../../../icons";
import "./CartItem.scss";

const CartItem = ({ card }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__imgWrap">
        <img className="cartItem__img" src={card.img[0]} alt={card.title} />
      </div>
      <div className="cartItem__content">
        <p className="cartItem__productTitle">{card.title}</p>
        <div className="cartItem__featuresWrap">
          <div className="cartItem__feature">
            <p className="cartItem__featureKey">Price</p>
            <p className="cartItem__featureValue">${card.price}</p>
            {cartArrowIcon}
          </div>
          <div className="cartItem__feature">
            <p className="cartItem__featureKey">Color</p>
            <p className="cartItem__featureValue">{card.colors[0].colorText}</p>
            {cartArrowIcon}
          </div>
          <div className="cartItem__feature">
            <p className="cartItem__featureKey">Size</p>
            {/* нужно тоже что-то придуать, чтобы active был */}
            <p className="cartItem__featureValue">{card.sizes[0]}</p>
            {cartArrowIcon}
          </div>
          <div className="cartItem__feature">
            <p className="cartItem__featureKey">Amount</p>
            {/* нужно тоже что-то придуать, чтобы active был */}
            <p className="cartItem__featureValue">{card.amount}</p>
            {cartArrowIcon}
          </div>
        </div>
        <p className="cartItem__remove">Remove</p>
      </div>
    </div>
  );
};

export default CartItem;
