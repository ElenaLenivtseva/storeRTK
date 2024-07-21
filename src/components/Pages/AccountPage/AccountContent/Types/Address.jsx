import React from "react";
import Button from "../../../../Common/Button/Button";
import InfoItem from "../Common/InfoItem";

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
        <div className="accountContent__wrap">
          <Button className="accountContent__button">Edit</Button>
        </div>
      </div>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <Button className="button_totalBlack">Add New Address</Button>
        </div>
      </div>
    </div>
  );
};

export default Address;
