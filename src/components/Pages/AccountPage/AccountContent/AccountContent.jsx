import React from "react";
import Button from "../../../Common/Button/Button";
import "./AccountContent.scss";

const AccountContent = () => {
  return (
    <div className="accountContent">
      <h3 className="accountContent__title">My Personal Information</h3>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <div className="accountContent__info">
            <p className="accountContent__subtitle">First Name</p>
            <p className="accountContent__text">Chloe</p>
          </div>
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Birthday</p>
            <p className="accountContent__text">09/06/1995</p>
          </div>
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Phone Number</p>
            <p className="accountContent__text">+1 212-531-3248</p>
          </div>
        </div>
        <div className="accountContent__wrap">
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Last Name</p>
            <p className="accountContent__text">+1 212-531-3248</p>
          </div>
          <div className="accountContent__info">
            <p className="accountContent__subtitle">Gender</p>
            <p className="accountContent__text">Woman</p>
          </div>
        </div>
        <div className="accountContent__wrap">
          <Button className="accountContent__button">Edit</Button>
        </div>
      </div>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <p className="accountContent__subtitle">Email</p>
          <p className="accountContent__text">chloenicker@gmail.ru</p>
        </div>
        <div className="accountContent__wrap">
          
        </div>
        <div className="accountContent__wrap">
          <Button className="accountContent__button">Edit</Button>
        </div>
      </div>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <p className="accountContent__subtitle">Password</p>
          <p className="accountContent__text">******</p>
        </div>
        <div className="accountContent__wrap">
          
        </div>
        <div className="accountContent__wrap">
          <Button className="accountContent__button">Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountContent;
