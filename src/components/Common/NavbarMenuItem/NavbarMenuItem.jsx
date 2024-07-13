import React from "react";

const NavbarMenuItem = ({text}) => {
  return (
    <div className="navbar__menuItem">
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={0.5}
        stroke="currentColor"
        className="navbar__arrow"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default NavbarMenuItem;
