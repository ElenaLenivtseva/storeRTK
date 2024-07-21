import React from "react";
import Button from "../../../Common/Button/Button";

const Address = () => {
  return (
    <div className="accountContent">
      <h3 className="accountContent__title">My Shipping Addresses</h3>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Address</p>
            <p className="accountContent__text">80 Greene St.</p>
          </div>
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Country</p>
            <p className="accountContent__text">US</p>
          </div>
          <div className="accountContent__info">
            <p className="accountContent__subtitle">City</p>
            <p className="accountContent__text">New York</p>
          </div>
        </div>
        <div className="accountContent__wrap">
          <div className="accountContent__info">
            <p className="accountContent__subtitle">State/Province</p>
            <p className="accountContent__text">NY</p>
          </div>
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Postal Code</p>
            <p className="accountContent__text">10012</p>
          </div>
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
