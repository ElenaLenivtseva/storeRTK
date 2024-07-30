import React, { useState } from "react";
import { homeIcon, storeIcon } from "../../../../../icons";
import "./Shipping.scss";
import OptionShipping from "./OptionShipping";
import BaseInput from "../../Common/BaseInput/BaseInput";
import Checkbox from "../../Common/Checkbox/Checkbox";

const options = [
  {
    title: "Picked up at the store",
    icon: homeIcon,
    duration: "2-4 days, faster and easier",
    cost: "Free",
    active: false,
  },
  {
    title: "Home delivery",
    icon: storeIcon,
    duration: "Delivery in 3-5 business days",
    cost: "$12",
    active: true,
  },
];
// const deliveryInputs = [
//   { type: "text", placeholder: "First Name" },
//   { type: "text", placeholder: "Last Name" },
//   { type: "text", placeholder: "Address" },
//   { type: "text", placeholder: "City" },
//   { type: "text", placeholder: "Country" },
//   { type: "text", placeholder: "State/Province" },
//   { type: "text", placeholder: "Postal Code" },
//   { type: "text", placeholder: "Additional Information (optional)" },
//   { type: "tel", placeholder: "Phone Number" },
// ];
const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  country: "",
  state: "",
  postal: "",
  additional: "",
  phone: "",
  saveAddress: false,
};
const Shipping = () => {
  const [values, setValues] = useState(initialValues);
  console.log(values);
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
      saveAddress: !values.saveAddress,
    });
  };
  return (
    <div className="shipping">
      <div className="shipping__options">
        {options.map((item, index) => {
          return <OptionShipping key={index} info={item} />;
        })}
      </div>

      <div className="shipping__delivery">
        <h4 className="subtitle subtitle_sm shipping__deliveryTitle">
          Fill in the information to deliver your order:
        </h4>
        <div className="shipping__deliveryWrap">
          {/* {deliveryInputs.map((item, index) => {
            return <BaseInput key={index} info={item} />;
          })} */}
          <BaseInput
            info={{ type: "text", placeholder: "First Name" }}
            onChange={handleInputChange}
            value={values.firstName}
            name="firstName"
          />
          <BaseInput
            info={{ type: "text", placeholder: "Last Name" }}
            onChange={handleInputChange}
            value={values.lastName}
            name="lastName"
          />
          <BaseInput
            info={{ type: "text", placeholder: "Address" }}
            onChange={handleInputChange}
            value={values.address}
            name="address"
          />
          <BaseInput
            info={{ type: "text", placeholder: "City" }}
            onChange={handleInputChange}
            value={values.city}
            name="city"
          />
          <BaseInput
            info={{ type: "text", placeholder: "Country" }}
            onChange={handleInputChange}
            value={values.country}
            name="country"
          />
          <BaseInput
            info={{ type: "text", placeholder: "Postal Code" }}
            onChange={handleInputChange}
            value={values.postal}
            name="postalCode"
          />
          <BaseInput
            info={{ type: "text", placeholder: "Additional Information (optional)" }}
            onChange={handleInputChange}
            value={values.additional}
            name="additionalInfo"
          />
          <BaseInput
            info={{ type: "tel", placeholder: "Phone Number" }}
            onChange={handleInputChange}
            value={values.phone}
            name="phone"
          />
        </div>
        <p className="shipping__deliveryNote">
          We'll contact you via this number for any delivery issues.
        </p>
      </div>

      <Checkbox
        label="Save this address for future purchases"
        isChecked={values.saveAddress}
        onChange={handleCheckSave}
      />
    </div>
  );
};

export default Shipping;
