import React from "react";
import InfoItem from "../Common/InfoItem";
import WrapItem from "../Common/WrapItem";

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
        <WrapItem info={{ type: "button", buttonContent: "Edit" }} />
      </div>
      <div className="accountContent__block">
        <WrapItem
          info={{ type: "buttonBlack", buttonContent: "Add New Card" }}
        />
      </div>
    </div>
  );
};

export default Wallet;
