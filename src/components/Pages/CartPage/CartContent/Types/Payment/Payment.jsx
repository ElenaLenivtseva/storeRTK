import React, { useState } from "react";
import BaseInput from "../../../../../Common/BaseInput/BaseInput";
import Checkbox from "../../../../../Common/Checkbox/Checkbox";
import "./Payment.scss";

const initialValues = {
  cardNumber: "",
  cardholder: "",
  expiration: "",
  cvc: "",
  email: "",
  saveCard: false,
  policy: false,
};
const Payment = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleCheckSave = () => {
    setValues({
      ...values,
      saveCard: !values.saveCard,
    });
  };
  const handleCheckPolicy = () => {
    setValues({
      ...values,
      policy: !values.policy,
    });
  };
  return (
    <div className="payment">
      <h3 className="subtitle subtitle_sm payment__title">Payment Process</h3>
      <div className="payment__wrap">
        <BaseInput
          info={{
            type: "number",
            placeholder: "Card Number",
            value: values.cardNumber,
            name: "cardNumber",
          }}
          onChange={handleInputChange}
        />
        <BaseInput
          info={{
            type: "text",
            placeholder: "Cardholder Name",
            value: values.cardholder,
            name: "cardholder",
          }}
          onChange={handleInputChange}
        />

        <div className="payment__wrap">
          <BaseInput
            info={{
              type: "text",
              placeholder: "Expiration Date",
              value: values.expiration,
              name: "expiration",
            }}
            onChange={handleInputChange}
          />
          <BaseInput
            info={{
              type: "number",
              placeholder: "CVC",
              value: values.cvc,
              name: "cvc",
            }}
            onChange={handleInputChange}
          />
        </div>
        <BaseInput
          info={{
            type: "email",
            placeholder: "Email",
            value: values.email,
            name: "email",
          }}
          onChange={handleInputChange}
        />
      </div>
      <div className="payment__checks">
        <div className="checkbox-wrapper"></div>
        <div className="payment__checks">
          <Checkbox
            label="Saved as preferred Credit Card"
            isChecked={values.saveCard}
            onChange={handleCheckSave}
          />
          <Checkbox
            label="I have read and accept the Purchase Conditions and the basic
            information about Privacy Policy"
            isChecked={values.policy}
            onChange={handleCheckPolicy}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
