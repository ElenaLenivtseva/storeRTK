import React from "react";

const ItemTotalCart = ({info}) => {
  return (
    <div className="totalCart__item">
      <p className="totalCart__itemText">{info.title}</p>
      <p className="totalCart__itemText">{info.value}</p>
    </div>
  );
};

export default ItemTotalCart;
