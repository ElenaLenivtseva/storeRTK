import React from "react";
import './Confirmation.scss'

const Confirmation = () => {
  return (
    <div className="confirmation">
      <h3 className="subtitle confirmation__title">Payment Process</h3>
      <div className="confirmation__wrap">
        <input
          className="confirmation__input"
          type="number"
          placeholder="Card Number"
        />
        <input
          className="confirmation__input"
          type="text"
          placeholder="Cardholder Name"
        />
        <div className="confirmation__wrap">
        <input
          className="confirmation__input"
          type="text"
          placeholder="Expiration Date"
        />
        <input
          className="confirmation__input"
          type="number"
          placeholder="CVC"
        />
        </div>
        
        <input
          className="confirmation__input"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="confirmation__checks">
        <div className="confirmation__check">
          <input type="checkbox" name="saveCard" />
          <label className='confirmation__label' htmlFor="saveCard">Saved as preferred Credit Card</label>
        </div>
        <div className="confirmation__check">
          <input type="checkbox" name="policy" />
          <label className='confirmation__label' htmlFor="policy">
            I have read and accept the Purchase Conditions and the basic
            information about Privacy Policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
