import React from "react";
import ItemTotalCart from "./ItemTotalCart";
import './TotalCart.scss'
import Button from "../../../../../Common/Button/Button";

const TotalCart = () => {
  return (
    <div className="totalCart">
      <div className="totalCart__header">
        <h4 className="totalCart__subtitle">Total Cart</h4>
        <p className="totalCart__itemsAmount">[2 items]</p>
      </div>
      <div className="totalCart__body">
        <ItemTotalCart info={{title: 'Subtotal', value: '$750'}}/>
        <ItemTotalCart info={{title: 'Shopping', value: 'Free'}}/>
        <ItemTotalCart info={{title: 'Total', value: '$750'}}/>
      </div>
      <div className="totalCart__buttons">
        <Button className='button_totalBlack totalCart__button'>Continue to Shipping</Button>
        <Button className='button_withoutOutline totalCart__button'>Back to Store</Button>
      </div>
    </div>
  );
};

export default TotalCart;
