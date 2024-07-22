import React from "react";
import WrapItem from "../Common/WrapItem";


const OrderProduct = ({ info }) => {
  return (
    <div className="accountContent__block">
      <WrapItem
        info={{ type: "img", imgSrc: info.img, imgTitle: info.title }}
      />
      <WrapItem
        info={{
          type: "full",
          content: [
            {
              subtitle: "Order Date:",
              text: info.date,
              additionalClass: "order",
            },
            { subtitle: "Status", text: info.status, additionalClass: "order" },
            {
              subtitle: "Amount",
              text: `${info.amount} ${info.amount > 1 ? "items" : "item"}`,
              additionalClass: "order",
            },
            {
              subtitle: "Cost",
              text: `$${info.price * info.amount}`,
              additionalClass: "order",
            },
          ],
        }}
      />
      <WrapItem info={{ type: "button", buttonContent: "View Product" }} />
    </div>
  );
};

export default OrderProduct;
