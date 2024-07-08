import React from "react";
import Button from "../Button/Button";
import './FilterType.scss'

const FilterType = ({ name, array }) => {
  return (
    <div className="filterType">
      <h6 className="filterType__subtitle">{name}</h6>
      <div className="filterType__buttons">
        {array.map((title, index) => {
          return (
            <Button className="button_withoutOutline" key={index}>
              {title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterType;
