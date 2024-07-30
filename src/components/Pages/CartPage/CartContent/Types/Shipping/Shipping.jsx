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
  const deliveryInputs = [
    { type: "text", placeholder: "First Name", value: values.firstName, name:'firstName' },
    { type: "text", placeholder: "Last Name", value: values.lastName, name:'lastName' },
    { type: "text", placeholder: "Address", value: values.address, name:'address' },
    { type: "text", placeholder: "City", value: values.city, name:'city' },
    { type: "text", placeholder: "Country", value: values.country, name:'country' },
    { type: "text", placeholder: "State/Province", value: values.state, name:'state' },
    { type: "text", placeholder: "Postal Code", value: values.postal, name:'postal' },
    {
      type: "text",
      placeholder: "Additional Information (optional)",
      value: values.additional,
    },
    { type: "tel", placeholder: "Phone Number", value: values.phone, name:'phone' },
  ];

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
          {deliveryInputs.map((item, index) => {
            return <BaseInput key={index} info={item} value={item.value} name={item.name}  onChange={handleInputChange}/>;
          })}
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
