import React from "react";
import Slider from "react-slick";
import LinkComp from "../../../Common/LinkComp/LinkComp";
import ProductCard from "../../../Common/ProductCard/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LastCollections.scss";

const initialLastCollectionsProducts = [
  {
    id: 1,
    img: "https://i.pinimg.com/originals/d6/8b/96/d68b96f5bb4593f0cf04abe4b5b36c49.jpg",
    title: "Bubble Gum Rosy Ruffle Mini Dress",
    price: 850,
    colors: ["pink"],
  },
  {
    id: 2,
    img: "https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2477351424229381963/jpeg-600/G03.jpg?modifiedAt=1",
    title: "Blush Posy Blooming Roses Heels",
    price: 390,
    colors: ["pink", "blue", "green"],
  },
  {
    id: 3,
    img: "https://www.shopfranki.com/cdn/shop/products/Prancheta1copiar6.png?v=1675483554",
    title: "Pink Pirouette Rosy Ruffle BodySuit",
    price: 890,
    colors: ["pink", "blue", "green"],
  },
  {
    id: 1,
    img: "https://i.pinimg.com/originals/d6/8b/96/d68b96f5bb4593f0cf04abe4b5b36c49.jpg",
    title: "Bubble Gum Rosy Ruffle Mini Dress",
    price: 850,
    colors: ["pink"],
  },
  {
    id: 2,
    img: "https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2477351424229381963/jpeg-600/G03.jpg?modifiedAt=1",
    title: "Blush Posy Blooming Roses Heels",
    price: 390,
    colors: ["pink", "blue", "green"],
  },
  {
    id: 3,
    img: "https://www.shopfranki.com/cdn/shop/products/Prancheta1copiar6.png?v=1675483554",
    title: "Pink Pirouette Rosy Ruffle BodySuit",
    price: 890,
    colors: ["pink", "blue", "green"],
  },
];

const titleOfCollections = [
  "Shimmer Sophistication",
  "Rosy Ruffle Assortion",
  "Midnight Muse",
  "Fall Spring 24",
];

const LastCollections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="lastCollections">
      <div className="wrap">
        <div className="lastCollections__header">
          <h3 className="subtitle lastCollections__title">Last Collections</h3>
          <div className="lastCollections__tabs">
            {titleOfCollections.map((title, index) => {
              return <LinkComp key={index}>{title}</LinkComp>;
            })}
          </div>
        </div>
        <div className="lastCollections__body">
          <Slider {...settings} className="lastCollections__slider">
            {initialLastCollectionsProducts.map((product) => {
              return <ProductCard key={product.id} info={product} />;
            })}
          </Slider>
        </div>
        <LinkComp>Discover the Full Collection</LinkComp>
      </div>
    </section>
  );
};

export default LastCollections;
