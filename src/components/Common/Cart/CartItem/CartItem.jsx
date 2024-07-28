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
          <CartItemFeature featureTitle="Price" card={card} />
          <CartItemFeature featureTitle="Color" card={card} />
          <CartItemFeature featureTitle="Size" card={card} />
          {purpose === "wishlist" ? (
            <></>
          ) : (
            <CartItemFeature featureTitle="Amount" card={card} />
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
