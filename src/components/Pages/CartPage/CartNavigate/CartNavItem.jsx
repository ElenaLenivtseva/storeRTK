import React from "react";

const CartNavItem = ({ title, number, active }) => {
  return (
    <div className="cartNav__item">
      <p className="cartNav__title">{title}</p>
      <div className={`cartNav__circle ${active ? "cartNav__active" : ""}`}>
        {number}
      </div>
    </div>
  );
};

export default CartNavItem;
