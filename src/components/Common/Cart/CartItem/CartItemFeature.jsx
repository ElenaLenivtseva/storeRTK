import React from "react";
import { cartArrowIcon } from "../../../icons";

const CartItemFeature = ({ featureTitle, card }) => {
  
  return (
    <div className="cartItem__feature">
      <p className="cartItem__featureKey">{featureTitle}</p>
      
      {featureTitle==='Price'? <p className="cartItem__featureValue">${card.price}</p> : ''}
      {featureTitle==='Color'? <p className="cartItem__featureValue">{card.colors[0].colorText}</p> : ''}
      {featureTitle==='Size'? <p className="cartItem__featureValue">{card.sizes[0]}</p> : ''}
      {featureTitle==='Amount'? <p className="cartItem__featureValue">{card.amount}</p> : ''}
      
      {cartArrowIcon}
    </div>
  );
};

export default CartItemFeature;
