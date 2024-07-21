import React from "react";
import { visaCardIcon } from "../../../../icons";

const InfoItem = ({ subtitle, text, additionalClass }) => {
  return (
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
  );
};

export default InfoItem;
