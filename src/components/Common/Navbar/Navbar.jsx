import React from "react";
import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem";
import "./Navbar.scss";
import { accountIcon, cartIcon, heartNavbarIcon, searchIcon } from "../../icons";

const menuItems = ["Clothes", "Accessories", "Body Type", "Appearance"];
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__top">
        <p className="navbar__offer">
          Enjoy Complimentary Shipping on All Orders Worldwide!
        </p>
      </div>
      <div className="navbar__bottom">
        <p className="navbar__logo">AGAINST</p>
        <div className="navbar__menu">
          {menuItems.map((item, index) => {
            return <NavbarMenuItem key={index} text={item} />;
          })}
        </div>
        <div className="navbar__actionsWrap">
          <div className="navbar__action">{searchIcon}</div> 
          <div className="navbar__action">{accountIcon}</div> 
          <div className="navbar__action">{cartIcon}</div> 
          <div className="navbar__action">{heartNavbarIcon}</div> 
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
