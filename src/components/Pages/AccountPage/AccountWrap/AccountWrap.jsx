import React from "react";
import AccountContent from "../AccountContent/AccountContent";
import AccountMenu from "../AccountMenu/AccountMenu";
import './AccountWrap.scss'

const AccountWrap = () => {
  return (
    <div className="accountWrap">
      <div className="wrap accountWrap__container">
        <AccountMenu />
        <AccountContent />
      </div>
    </div>
  );
};

export default AccountWrap;
