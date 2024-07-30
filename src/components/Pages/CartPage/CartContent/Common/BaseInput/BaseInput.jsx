import React from "react";
import "./BaseInput.scss";

const BaseInput = ({ info, onChange, value, name }) => {
  return (
    <input
      className="input"
      type={info.type}
      placeholder={info.placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default BaseInput;
