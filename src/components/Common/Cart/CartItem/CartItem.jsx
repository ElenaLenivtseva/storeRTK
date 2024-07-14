import React from "react";
import "./CartItem.scss";

const CartItem = ({ card }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__imgWrap">
        <img className="cartItem__img" src={card.image} alt={card.title} />
      </div>
      <div className="cartItem__content">
        <p className="cartItem__productTitle">{card.title}</p>
        <div className="cartItem__feature">
          <p className="cartItem__featureKey">Price</p>
          <p className="cartItem__featureValue">${card.price}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="cartItem__arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="cartItem__feature">
          <p className="cartItem__featureKey">Color</p>
          <p className="cartItem__featureValue">${card.colors.active}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="cartItem__arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="cartItem__feature">
          <p className="cartItem__featureKey">Size</p>
          <p className="cartItem__featureValue">${card.sizes.active}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="cartItem__arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
