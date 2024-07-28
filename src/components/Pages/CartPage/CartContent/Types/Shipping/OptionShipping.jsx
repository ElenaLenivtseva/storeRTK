import React from "react";
import './OptionShipping.scss'

const OptionShipping = ({ info }) => {
  return (
    <div className={`option ${info.active?'active':'unactive'}`}>
      <div className="option__iconWrap">{info.icon}</div>
      <div className="option__info">
        <p className="option__infoText option__title">{info.title}</p>
        <p className="option__infoText option__dur">{info.duration}</p>
        <p className="option__infoText option__cost">{info.cost}</p>
      </div>
    </div>
  );
};

export default OptionShipping;
