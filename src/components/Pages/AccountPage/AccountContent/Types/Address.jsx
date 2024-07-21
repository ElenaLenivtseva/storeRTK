import React from "react";
import InfoItem from "../Common/InfoItem";
import WrapItem from "../Common/WrapItem";

const Address = () => {
  return (
    <div className="accountContent">
      <h3 className="accountContent__title">My Shipping Addresses</h3>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <InfoItem subtitle="Address" text="80 Greene St." />
          <InfoItem subtitle="Country" text="US" />
          <InfoItem subtitle="City" text="New York" />
        </div>
        <div className="accountContent__wrap">
          <InfoItem subtitle="State/Province" text="NY" />
          <InfoItem subtitle="Postal Code" text="10012" />
        </div>
        <WrapItem info={{type: 'button', buttonContent: 'Edit'}}/>
      </div>
      <div className="accountContent__block">
        <WrapItem info={{type: 'buttonBlack', buttonContent: 'Add New Address'}}/>
      </div>
    </div>
  );
};

export default Address;
