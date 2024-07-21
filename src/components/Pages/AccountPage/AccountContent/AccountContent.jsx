import React from "react";
import Address from "./Address";
import Orders from "./Orders";
import PersonalInfo from "./PersonalInfo";
import Wallet from "./Wallet";
import "./AccountContent.scss";

let type = "orders";

const AccountContent = () => {
  return (
    <>
      {type === "personalInfo" ? <PersonalInfo /> : <></>}
      {type === "address" ? <Address /> : <></>}
      {type === "wallet" ? <Wallet /> : <></>}
      {type === "orders" ? <Orders /> : <></>}
    </>
  );
};

export default AccountContent;
