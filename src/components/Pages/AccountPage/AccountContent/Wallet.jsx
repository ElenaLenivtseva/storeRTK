import React from "react";
import Button from "../../../Common/Button/Button";
import { visaCardIcon } from "../../../icons";

const Wallet = () => {
  return (
    <div className="accountContent">
      <h3 className="accountContent__title">My Wallet</h3>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Card Number</p>
            <div className="accountContent__withSvg">
              {visaCardIcon}
              <p className="accountContent__text">5396 **** **** ****</p>
            </div>
          </div>
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Expiration Date</p>
            <p className="accountContent__text">**/**</p>
          </div>
        </div>
        <div className="accountContent__wrap">
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Cardholder Name</p>
            <p className="accountContent__text">Chloe Nicker</p>
          </div>
          <div className="accountContent__info">
            <p className="accountContent__subtitle">CV</p>
            <p className="accountContent__text">***</p>
          </div>
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
