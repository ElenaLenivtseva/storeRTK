import React from "react";
import './OptionShipping.scss'

const OptionShipping = ({ title, icon, duration, cost, active }) => {
  return (
    <div className={`option ${active?'active':'unactive'}`}>
      <div className="option__iconWrap">{icon}</div>
      <div className="option__info">
        <p className="option__infoText option__title">{title}</p>
        <p className="option__infoText option__dur">{duration}</p>
        <p className="option__infoText option__cost">{cost}</p>
      </div>
    </div>
  );
};

export default OptionShipping;
