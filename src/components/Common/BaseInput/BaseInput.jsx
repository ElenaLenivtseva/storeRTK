import React from "react";
import "./BaseInput.scss";

const BaseInput = ({ info, onChange}) => {
  return (
    <input
      className="input"
      type={info.type}
      placeholder={info.placeholder}
      onChange={onChange}
      value={info.value}
      name={info.name}
    />
  );
};

export default BaseInput;
