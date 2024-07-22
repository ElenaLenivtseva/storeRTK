import React from "react";
import { visaCardIcon } from "../../../../icons";

const InfoItem = ({ subtitle, text, additionalClass }) => {
  return (
    <>
      {additionalClass === "order" ? (
        <div className="accountContent__info accountContent__infoStretch">
          <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
            {subtitle}
          </p>
          {text ==='In Progress'|| text ==='Recieved'? (
            <p
              className={`accountContent__status accountContent__status${
                text === "In Progress" ? "Progress" : "Recieved"
              }`}
            >
              {text}
            </p>
          ) : (
            <p className="accountContent__text">{text}</p>
          )}
        </div>
      ) : (
        <div className="accountContent__info">
          <p className="accountContent__subtitle">{subtitle}</p>
          {additionalClass === "withSvg" ? (
            <div className="accountContent__withSvg">
              {visaCardIcon}
              <p className="accountContent__text">{text}</p>
            </div>
          ) : (
            <p className="accountContent__text">{text}</p>
          )}
        </div>
      )}
    </>
  );
};

export default InfoItem;
