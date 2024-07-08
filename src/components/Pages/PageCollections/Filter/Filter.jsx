import React from "react";
import Button from '../../../Common/Button/Button'
import FilterType from "../../../Common/FilterType/FilterType";
import LinkComp from "../../../Common/LinkComp/LinkComp";
import "./Filter.scss";

const titleOfCollections = [
  "Shimmer Sophistication",
  "Rosy Ruffle Assortion",
  "Midnight Muse",
  "Fall Spring 24",
];
const typeTitles = ["Blouses", "Dresses", "Skirts", "Accessories", "Heels", 'Pants'];
const bodyTypeTitles = ["Triangle", "Rectangle", "Apple", "HourGlass", "Pear"];
const appearanceTypeTitles = ["Gamin", "Romantic", "Dramatic", "Natural", "GR", "RG", "GD", 'DG', 'GN', 'NG', 'RD', 'DR', 'RN', 'NR'];
const colorTypeTitles = ['Warm Winter', 'Cold Winter', 'Warm Spring', 'Cold Spring', 'Warm Summer', 'Cold Summer', 'Warm Autumn', 'Cold Autumn']

const Filter = () => {
  return (
    <div className="filterBar collections__filterBar">
      <div className="filterBar__pop">
        <div className="filterBar__popHead">
          <h4 className="filterBar__popTitle">Filter</h4>
          <svg
            className="filterBar__icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="filterBar__popContent">
          <FilterType name='Clothes Type' array={typeTitles}/>
          <FilterType name='Body Type' array={bodyTypeTitles}/>
          <FilterType name='Appearance Type' array={appearanceTypeTitles}/>
          <FilterType name='Color Type' array={colorTypeTitles}/>
        </div>
        <Button className='button_black'>Apply Changes</Button>
        <Button className='button_withoutOutline'>Remove All</Button>
      </div>
      <div className="filterBar__filter">
        <svg
          className="filterBar__icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        <p className="filterBar__filterText">Filter</p>
      </div>
      <div className="filterBar__tabs">
        {titleOfCollections.map((title, index) => {
          return <LinkComp key={index}>{title}</LinkComp>;
        })}
      </div>
      <div className="filterBar__filter">
        <p className="filterBar__filterText">Sort</p>
        <svg
          className="filterBar__icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Filter;
