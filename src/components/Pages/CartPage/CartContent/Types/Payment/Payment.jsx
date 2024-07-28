import React from "react";
import Checkbox from "../../Common/Checkbox/Checkbox";
import "./Payment.scss";
import BaseInput from "../../Common/BaseInput/BaseInput";

const Payment = () => {
  return (
    <div className="payment">
      <h3 className="subtitle payment__title">Payment Process</h3>
      <div className="payment__wrap">
        <BaseInput type="number" placeholder="Card Number" />
        <BaseInput type="text" placeholder="Cardholder Name" />

        <div className="payment__wrap">
          <BaseInput type="text" placeholder="Expiration Date" />
          <BaseInput type="number" placeholder="CVC" />
        </div>
        <BaseInput type="email" placeholder="Email" />
      </div>
      <div className="payment__checks">
        <div className="checkbox-wrapper"></div>
        <div className="payment__checks">
          <Checkbox label="Saved as preferred Credit Card" />
          <Checkbox
            label="I have read and accept the Purchase Conditions and the basic
            information about Privacy Policy"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
