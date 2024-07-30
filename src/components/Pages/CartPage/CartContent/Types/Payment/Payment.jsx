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
          onChange={handleInputChange} value={values.cardNumber} name='cardNumber'
        />
        <BaseInput
          info={{ type: "text", placeholder: "Cardholder Name" }}
          onChange={handleInputChange} value={values.cardholder} name='cardholder'
        />

        <div className="payment__wrap">
          <BaseInput
            info={{ type: "text", placeholder: "Expiration Date" }}
            onChange={handleInputChange} value={values.expiration} name='expiration'
          />
          <BaseInput
            info={{ type: "number", placeholder: "CVC" }}
            onChange={handleInputChange} value={values.cvc} name='cvc'
          />
        </div>
        <BaseInput
          info={{ type: "email", placeholder: "Email" }}
          onChange={handleInputChange}
           value={values.email} name='email'
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
