import React from "react";
import Slider from "react-slick";
import LinkComp from "../../Common/LinkComp/LinkComp";
import ProductCard from "../../Common/ProductCard/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Selection.scss";

const Selection = ({ title, products, link }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="selection">
      <div className="wrap">
        <div className="selection__header">
          <h3 className="subtitle selection__title">{title}</h3>
          {link ? <LinkComp>Discover the Full Collection</LinkComp> : ""}
        </div>
        <div className="selection__body">
          <Slider {...settings} className="selection__slider">
            {products.map((product) => {
              return <ProductCard key={product.id} info={product} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Selection;
