import React from "react";
import LinkComp from "../../Common/LinkComp/LinkComp";
import ProductCard from "../../Common/ProductCard/ProductCard";
import "./Selection.scss";

const Selection = ({ title, products, link }) => {
  return (
    <section className="selection">
      <div className="wrap">
        <div className="selection__header">
          <h3 className="subtitle selection__title">{title}</h3>
          {link ? <LinkComp>Discover the Full Collection</LinkComp> : ""}
        </div>
        <div className="selection__body">
          {products.map((product) => {
            return <ProductCard key={product.id} info={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Selection;
