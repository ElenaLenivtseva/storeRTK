import React from "react";
import Button from "../../Common/Button/Button";
import './CategoryCard.scss'

const CategoryCard = ({ info }) => {
  return (
    <div className="category">
      <div className="category__imgWrap">
        <img className="category__img" src={info.img} alt={info.title} />
      </div>
      <div className="category__info">
        <h4 className="subtitle subtitle_sm subtitle_white category__subtitle">{info.title}</h4>
        <Button>Discover the Category</Button>
      </div>
    </div>
  );
};

export default CategoryCard;
