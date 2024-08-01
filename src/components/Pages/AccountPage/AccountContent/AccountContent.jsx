import React from "react";
import { useParams } from "react-router-dom";
import Address from "./Types/Address";
import Orders from "./Types/Orders";
import PersonalInfo from "./Types/PersonalInfo";
import Wallet from "./Types/Wallet";
import "./AccountContent.scss";

let type = "personalInfo";

const AccountContent = () => {
  const params = useParams();
  const accountType = params.id;
  console.log(accountType)
  return (
    <>
      {accountType === ":personalInfo" ||!accountType? <PersonalInfo /> : ""}
      {accountType === ":address" ? <Address /> : ""}
      {accountType === ":wallet" ? <Wallet /> : ""}
      {accountType === ":orders" ? <Orders /> : ""}
    </>
  );
};

export default AccountContent;
