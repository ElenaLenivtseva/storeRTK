import React from "react";
import CategoryCard from "../../../Common/CategoryCard/CategoryCard";
import LinkComp from "../../../Common/LinkComp/LinkComp";
import "./ShopByCategory.scss";


const initialCategories = [
  {
    id: 1,
    title: "Color Type Warm Autumn",
    img: "https://www.happy-moms.ru/_images/_big/5201608_1.jpg",
  },
  {
    id: 2,
    title: "Pear Body Type",
    img: "https://x-moda.ru/uploads/redactor_image/2536/d4ff979d-3293-4b10-b657-e00ff7123013.png",
  },
];
const ShopByCategory = () => {
  return (
    <section className="shopByCategory">
      <div className="shopByCategory__header">
        <h3 className="subtitle shopByCategory__title">Shop by Category</h3>
        <p className="shopByCategory__lead">
          Eplore, experiment and emphasize your identity. Every peace in our
          array is the genesis of your confidence, elegance and distinctive
          style.
        </p>
      </div>
      <div className="shopByCategory__body">
        {initialCategories.map((categ) => {
          return <CategoryCard key={categ.id} info={categ} />;
        })}
      </div>
      <LinkComp>Discover All Categories</LinkComp>
    </section>
  );
};

export default ShopByCategory;
