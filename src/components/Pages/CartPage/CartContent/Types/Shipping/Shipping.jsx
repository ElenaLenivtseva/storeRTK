import React from "react";
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
const deliveryInputs = [
  { type: "text", placeholder: "First Name" },
  { type: "text", placeholder: "Last Name" },
  { type: "text", placeholder: "Address" },
  { type: "text", placeholder: "City" },
  { type: "text", placeholder: "Country" },
  { type: "text", placeholder: "State/Province" },
  { type: "text", placeholder: "Postal Code" },
  { type: "text", placeholder: "Additional Information (optional)" },
  { type: "tel", placeholder: "Phone Number" },
];
const Shipping = () => {
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
            return <BaseInput key={index} info={item} />;
          })}
        </div>
        <p className="shipping__deliveryNote">
          We'll contact you via this number for any delivery issues.
        </p>
      </div>

      <Checkbox label="Save this address for future purchases" />
    </div>
  );
};

export default Shipping;
