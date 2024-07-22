import React from "react";
import Address from "./Types/Address";
import Orders from "./Types/Orders";
import PersonalInfo from "./Types/PersonalInfo";
import Wallet from "./Types/Wallet";
import "./AccountContent.scss";

let type = "orders";

const AccountContent = () => {
  return (
    <>
      {type === "personalInfo" ? <PersonalInfo /> : ""}
      {type === "address" ? <Address /> : ""}
      {type === "wallet" ? <Wallet /> : ""}
      {type === "orders" ? <Orders /> : ""}
    </>
  );
};

export default AccountContent;
