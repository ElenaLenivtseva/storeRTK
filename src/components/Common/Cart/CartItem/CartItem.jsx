import React from "react";
import CartItemFeature from "./CartItemFeature";
import "./CartItem.scss";

const CartItem = ({ card, purpose }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__imgWrap">
        <img className="cartItem__img" src={card.img[0]} alt={card.title} />
      </div>
      <div className="cartItem__content">
        <p className="cartItem__productTitle">{card.title}</p>
        <div className="cartItem__featuresWrap">
          <CartItemFeature featureTitle="Price" card={card} purpose={purpose}/>
          <CartItemFeature featureTitle="Color" card={card} purpose={purpose}/>
          <CartItemFeature featureTitle="Size" card={card} purpose={purpose}/>
          {purpose === "wishlist" ? (
            <></>
          ) : (
            <CartItemFeature featureTitle="Amount" card={card} purpose={purpose}/>
          )}
        </div>
        {purpose === "orderConfirm" ? (
          <></>
        ) : (
          <p className="cartItem__remove">Remove</p>
        )}
      </div>
    </div>
  );
};

export default CartItem;
