import React from "react";
import Button from "../../../../Common/Button/Button";
import InfoItem from "./InfoItem";

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
      {info.type === "full" ? (
        <div className="accountContent__wrap">
          {info.content.map((item, index) => {
            return (
              <InfoItem
                key={index}
                subtitle={item.subtitle}
                text={item.text}
                additionalClass={item.additionalClass}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
      {info.type === "img" ? (
        <div className="accountContent__wrap accountContent__wrapImg">
          <img
            className="accountContent__img"
            src={info.imgSrc}
            alt={info.imgTitle}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default WrapItem;
