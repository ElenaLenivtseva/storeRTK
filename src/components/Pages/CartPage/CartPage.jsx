import React from "react";
import Navbar from "../../../components/Common/Navbar/Navbar";
import CartNavigate from "./CartNavigate/CartNavigate";
import CartContent from "./CartContent/CartContent";
import "./CartContent.scss";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <CartNavigate />
      <CartContent />
    </div>
  );
};

export default CartPage;