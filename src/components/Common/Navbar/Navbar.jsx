import React from "react";
import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem";
import {
  accountIcon,
  cartIcon,
  heartNavbarIcon,
  searchIcon,
} from "../../icons";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Clothes",
    links: ["/dresses", "/shirts", "/skirts"],
    listItems: ["dresses", "shirts", "skirts"],
  },
  {
    title: "Color Type",
    links: ["/collections", "/collections", "/collections", "/collections"],
    listItems: ["winter", "spring", "summer", "autumn"],
  },
  {
    title: "Body Type",
    links: [
      "/collections",
      "/collections",
      "/collections",
      "/collections",
      "/collections",
      "/collections",
    ],
    listItems: ["pear", "apple", "hourglass", "rectangle", "inverted Triangle"],
  },
  {
    title: "Appearance",
    links: ["/collections", "/collections", "/collections", "/collections"],
    listItems: ["gamin", "romantic", "dramatic", "natural"],
  },
];
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__top">
        <p className="navbar__offer">
          Enjoy Complimentary Shipping on All Orders Worldwide!
        </p>
      </div>
      <div className="navbar__bottom">
        <Link to="/">
          <p className="logo">AGAINST</p>
        </Link>

        <div className="navbar__menu">
          {menuItems.map((item, index) => {
            return <NavbarMenuItem key={index} info={item} />;
          })}
        </div>
        <div className="navbar__actionsWrap">
          <div className="navbar__action">
            <Link to="/">{searchIcon}</Link>
          </div>
          <div className="navbar__action">
            <Link to="/account"> {accountIcon}</Link>
          </div>
          <div className="navbar__action">
            <Link to="/cart"> {cartIcon}</Link>
          </div>
          <div className="navbar__action">
            <Link to="/wishlist"> {heartNavbarIcon}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
