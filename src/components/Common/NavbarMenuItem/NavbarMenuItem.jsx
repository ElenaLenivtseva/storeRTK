import React from "react";
import { openArrowIcon } from "../../icons";

const NavbarMenuItem = ({text}) => {
  return (
    <div className="navbar__menuItem">
      {text}
      {openArrowIcon}
    </div>
  );
};

export default NavbarMenuItem;
