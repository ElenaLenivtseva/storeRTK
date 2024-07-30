import React, {useState} from "react";
import Checkbox from "../../Common/Checkbox/Checkbox";
import "./Payment.scss";
import BaseInput from "../../Common/BaseInput/BaseInput";

const initialValues = {
  cardNumber: "",
  cardholder: "",
  expiration: "",
  cvc: "",
  email: "",
  saveCard: "",
  policy: "",
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
  return (
    <div className="payment">
      <h3 className="subtitle subtitle_sm payment__title">Payment Process</h3>
      <div className="payment__wrap">
        <BaseInput
          info={{ type: "number", placeholder: "Card Number" }}
          onChange={handleInputChange}
        />
        <BaseInput
          info={{ type: "text", placeholder: "Cardholder Name" }}
          onChange={handleInputChange}
        />

        <div className="payment__wrap">
          <BaseInput
            info={{ type: "text", placeholder: "Expiration Date" }}
            onChange={handleInputChange}
          />
          <BaseInput
            info={{ type: "number", placeholder: "CVC" }}
            onChange={handleInputChange}
          />
        </div>
        <BaseInput
          info={{ type: "email", placeholder: "Email" }}
          onChange={handleInputChange}
        />
      </div>
      <div className="payment__checks">
        <div className="checkbox-wrapper"></div>
        <div className="payment__checks">
          <Checkbox
            label="Saved as preferred Credit Card"
            onChange={handleInputChange}
          />
          <Checkbox
            label="I have read and accept the Purchase Conditions and the basic
            information about Privacy Policy"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
