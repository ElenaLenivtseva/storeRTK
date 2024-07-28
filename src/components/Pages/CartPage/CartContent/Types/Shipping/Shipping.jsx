import React from "react";
import { homeIcon, storeIcon } from "../../../../../icons";
import "./Shipping.scss";
import OptionShipping from "./OptionShipping";

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
const Shipping = () => {
  return (
    <div className="shipping">
      <div className="shipping__options">
        {options.map((item,index)=>{
          return  <OptionShipping key={index} info={item}/>
        })}
      </div>
    </div>
  );
};

export default Shipping;
