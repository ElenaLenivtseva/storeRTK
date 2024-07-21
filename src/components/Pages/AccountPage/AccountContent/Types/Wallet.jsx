import React from "react";
import Button from "../../../../Common/Button/Button";
import InfoItem from "../Common/InfoItem";

const Wallet = () => {
  return (
    <div className="accountContent">
      <h3 className="accountContent__title">My Wallet</h3>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <InfoItem
            subtitle="Card Number"
            text="5396 **** **** ****"
            additionalClass="withSvg"
          />

          <InfoItem subtitle="Expiration Date" text="**/**" />
        </div>
        <div className="accountContent__wrap">
          <InfoItem subtitle="Cardholder Name" text="Chloe Nicker" />
          <InfoItem subtitle="CV" text="***" />
        </div>
        <div className="accountContent__wrap">
          <Button className="accountContent__button">Edit</Button>
        </div>
      </div>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <Button className="button_totalBlack">Add New Card</Button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
