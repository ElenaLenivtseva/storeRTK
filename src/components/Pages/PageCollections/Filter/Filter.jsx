import React from "react";
import Button from "../../../Common/Button/Button";
import FilterType from "../../../Common/FilterType/FilterType";
import LinkComp from "../../../Common/LinkComp/LinkComp";
import "./Filter.scss";
import { closeIcon, filterIcon, sortIcon } from "../../../icons";

const titleOfCollections = [
  "Shimmer Sophistication",
  "Rosy Ruffle Assortion",
  "Midnight Muse",
  "Fall Spring 24",
];
const typeTitles = [
  "Blouses",
  "Dresses",
  "Skirts",
  "Accessories",
  "Heels",
  "Pants",
];
const bodyTypeTitles = ["Triangle", "Rectangle", "Apple", "HourGlass", "Pear"];
const appearanceTypeTitles = [
  "Gamin",
  "Romantic",
  "Dramatic",
  "Natural",
  "GR",
  "RG",
  "GD",
  "DG",
  "GN",
  "NG",
  "RD",
  "DR",
  "RN",
  "NR",
];
const colorTypeTitles = [
  "Warm Winter",
  "Cold Winter",
  "Warm Spring",
  "Cold Spring",
  "Warm Summer",
  "Cold Summer",
  "Warm Autumn",
  "Cold Autumn",
];

const Filter = ({ type }) => {
  return (
    <div className="filterBar collections__filterBar">
      <div className="filterBar__pop">
        <div className="filterBar__popHead">
          <h4 className="filterBar__popTitle">Filter</h4>
          {closeIcon}
        </div>
        <div className="filterBar__popContent">
          {type === "clothes" ? (
            ""
          ) : (
            <FilterType name="Clothes Type" array={typeTitles} />
          )}

          <FilterType name="Body Type" array={bodyTypeTitles} />
          <FilterType name="Appearance Type" array={appearanceTypeTitles} />
          <FilterType name="Color Type" array={colorTypeTitles} />
        </div>
        <Button className="button_black">Apply Changes</Button>
        <Button className="button_withoutOutline">Remove All</Button>
      </div>
      <div className="filterBar__filter">
        {filterIcon}
        <p className="filterBar__filterText">Filter</p>
      </div>
      <div className="filterBar__tabs">
        {type === "clothes" ? (
          ""
        ) : (
          <>
            {titleOfCollections.map((title, index) => {
              return <LinkComp key={index}>{title}</LinkComp>;
            })}
          </>
        )}
      </div>
      <div className="filterBar__filter">
        <p className="filterBar__filterText">Sort</p>
        {sortIcon}
      </div>
    </div>
  );
};

export default Filter;
