import React from "react";
import "./Checkbox.scss";
const Checkbox = ({ label, onChange, isChecked }) => {

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        <span className="checkbox__span">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
