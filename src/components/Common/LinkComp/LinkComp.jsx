import React from "react";
import "./LinkComp.scss";

const LinkComp = ({ children, bold }) => {
  return (
    <>
      {bold ? (
        <a className="link link_bold" href="#">
          {children}
        </a>
      ) : (
        <a className="link" href="#">
          {children}
        </a>
      )}
    </>
  );
};

export default LinkComp;
