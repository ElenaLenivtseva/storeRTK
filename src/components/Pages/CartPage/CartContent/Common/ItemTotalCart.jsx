import React from "react";

const ItemTotalCart = ({key, value}) => {
  return (
    <div className="totalCart__item">
      <p className="totalCart__itemText">{key}</p>
      <p className="totalCart__itemText">{value}</p>
    </div>
  );
};

export default ItemTotalCart;
