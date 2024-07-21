import React from "react";
import Button from "../../../../Common/Button/Button";

// шпаргалка
// const type = 'void/button/buttonBlack/full'
// const info = { type: "button", buttoncontent: "Edit" };
// const info2 = { type: "void", buttoncontent: "" };

const WrapItem = ({ info }) => {
  return (
    <>
      {info.type === "void" ? <div className="accountContent__wrap"></div> : ""}
      {info.type === "button" ? (
        <div className="accountContent__wrap">
          <Button className="accountContent__button">
            {info.buttonContent}
          </Button>
        </div>
      ) : (
        ""
      )}
      {info.type === "buttonBlack" ? (
        <div className="accountContent__wrap">
          <Button className="button_totalBlack">{info.buttonContent}</Button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default WrapItem;
