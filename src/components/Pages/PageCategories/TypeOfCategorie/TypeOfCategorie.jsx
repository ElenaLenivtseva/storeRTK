import React from "react";
import CategoryCard from "../../../Common/CategoryCard/CategoryCard";
import './TypeOfCategorie.scss'

const TypeOfCategorie = ({ title, info, columns }) => {
  return (
    <div className="categoryType">
      <h2 className="subtitle categoryType__title">{title}</h2>
      <div className={'categoryType__cardsWrap categoryType__cardsWrap_'+columns}>
        {info.map((item) => {
          return <CategoryCard key={item.id} info={item} />;
        })}
      </div>
    </div>
  );
};

export default TypeOfCategorie;
