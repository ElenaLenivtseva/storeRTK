import React from "react";
import Button from "../../../../Common/Button/Button";
import InfoItem from "../Common/InfoItem";

const OrderProduct = ({ info }) => {
  return (
    <div className="accountContent__block">
      <div className="accountContent__wrap accountContent__wrapImg">
        <img className="accountContent__img" src={info.img} alt={info.title} />
      </div>
      <div className="accountContent__wrap">
        <InfoItem
          subtitle="Order Date:"
          text={info.date}
          additionalClass="order"
        />
        <InfoItem
          subtitle="Status"
          text={info.status}
          additionalClass="order"
        />
        <InfoItem
          subtitle="Amount"
          text={`${info.amount} ${info.amount > 1 ? "items" : "item"}`}
          additionalClass="order"
        />
        <InfoItem
          subtitle="Cost"
          text={`$${info.price * info.amount}`}
          additionalClass="order"
        />
      </div>
      <div className="accountContent__wrap">
        <Button className="accountContent__button">View Product</Button>
      </div>
    </div>
  );
};

export default OrderProduct;
