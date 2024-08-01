import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "./useClickOutside";
import { openArrowIcon } from "../../icons";
import "./NavbarMenuItem.scss";

const NavbarMenuItem = ({ info }) => {
  console.log(info)
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });
  
  return (
    <div className="menu">
      <div className="menu__item" onClick={() => setOpen(!isOpen)}>
        {info.title}
        {openArrowIcon}
      </div>

      <ul className={`menu__list ${isOpen ? "active" : ""}`} ref={menuRef}>
        {info.links.map((item, index) => {
          return (
            <Link to={item}  className="menu__listLink">
              <li className="menu__listItem">{info.listItems[index]}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarMenuItem;
