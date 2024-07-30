import React,{useState} from "react";
import "./Checkbox.scss";
const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          className="checkbox__input"
          type="checkbox"
          onChange={() => setIsChecked((prev) => !prev)}
          checked={isChecked}
        />
        <span className="checkbox__span">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
