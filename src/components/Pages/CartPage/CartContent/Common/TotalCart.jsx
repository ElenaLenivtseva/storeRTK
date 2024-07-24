import React from "react";
import ItemTotalCart from "./ItemTotalCart";

const TotalCart = () => {
  return (
    <div className="totalCart">
      <div className="totalCart__header">
        <h4 className="subtitle totalCart__subtitle">Total Cart</h4>
        <p className="totalCart__items">[2 items]</p>
      </div>
      <div className="totalCart__body">
        <ItemTotalCart key='Subtotal' value='$750'/>
        <ItemTotalCart key='Shopping' value='Free'/>
        <ItemTotalCart key='Total' value='$750'/>
      </div>
    </div>
  );
};

export default TotalCart;
