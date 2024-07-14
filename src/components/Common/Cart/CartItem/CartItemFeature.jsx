import React from "react";

const CartItemFeature = ({ featureTitle, featureParameters }) => {
  return (
    <div className="cartItem__feature">
      <p className="cartItem__featureKey">{featureTitle}</p>
      (featureParameters.length===1 ? (
      <>
        <p className="cartItem__featureValue">${featureParameters[0]}</p>
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
      </>
      ) : (
      <>
        <p className="cartItem__featureValue">{featureParameters[0]}</p>
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
        {/* тут должен быть раскрывающийся список */}
      </>
      ) )
    </div>
  );
};

export default CartItemFeature;
