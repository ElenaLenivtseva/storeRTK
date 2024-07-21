import React from "react";
import InfoItem from "../Common/InfoItem";
import WrapItem from "../Common/WrapItem";

const PersonalInfo = () => {
  return (
    <div className="accountContent">
      <h3 className="accountContent__title">My Personal Information</h3>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <InfoItem subtitle="First Name" text="Chloe" />
          <InfoItem subtitle="Birthday" text="09/06/1995" />
          <InfoItem subtitle="Phone Number" text="+1 212-531-3248" />
        </div>
        <div className="accountContent__wrap">
          <InfoItem subtitle="Last Name" text="Nicker" />
          <InfoItem subtitle="Gender" text="Woman" />
        </div>
        <WrapItem info={{ type: "button", buttonContent: "Edit" }} />
      </div>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <InfoItem subtitle="Email" text="chloenicker@gmail.ru" />
        </div>
        <WrapItem info={{ type: "void", buttonContent: "" }} />
        <WrapItem info={{ type: "button", buttonContent: "Edit" }} />
      </div>
      <div className="accountContent__block">
        <div className="accountContent__wrap">
          <p className="accountContent__subtitle">Password</p>
          <p className="accountContent__text">******</p>
        </div>
        <WrapItem info={{ type: "void", buttonContent: "" }} />
        <WrapItem info={{ type: "button", buttonContent: "Edit" }} />
      </div>
    </div>
  );
};

export default PersonalInfo;
