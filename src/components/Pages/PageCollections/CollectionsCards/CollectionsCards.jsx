import React from "react";
import Button from "../../../Common/Button/Button";
import Filter from "../Filter/Filter";
import ProductCard from "../../../Common/ProductCard/ProductCard";
import "./CollectionsCards.scss";

const initialProducts = [
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
    id: 4,
    img: "https://i.pinimg.com/originals/d6/8b/96/d68b96f5bb4593f0cf04abe4b5b36c49.jpg",
    title: "Bubble Gum Rosy Ruffle Mini Dress",
    price: 850,
    colors: ["pink"],
  },
  {
    id: 5,
    img: "https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2477351424229381963/jpeg-600/G03.jpg?modifiedAt=1",
    title: "Blush Posy Blooming Roses Heels",
    price: 390,
    colors: ["pink", "blue", "green"],
  },
  {
    id: 6,
    img: "https://www.shopfranki.com/cdn/shop/products/Prancheta1copiar6.png?v=1675483554",
    title: "Pink Pirouette Rosy Ruffle BodySuit",
    price: 890,
    colors: ["pink", "blue", "green"],
  },
  {
    id: 7,
    img: "https://i.pinimg.com/originals/d6/8b/96/d68b96f5bb4593f0cf04abe4b5b36c49.jpg",
    title: "Bubble Gum Rosy Ruffle Mini Dress",
    price: 850,
    colors: ["pink"],
  },
  {
    id: 8,
    img: "https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2477351424229381963/jpeg-600/G03.jpg?modifiedAt=1",
    title: "Blush Posy Blooming Roses Heels",
    price: 390,
    colors: ["pink", "blue", "green"],
  },
  {
    id: 9,
    img: "https://www.shopfranki.com/cdn/shop/products/Prancheta1copiar6.png?v=1675483554",
    title: "Pink Pirouette Rosy Ruffle BodySuit",
    price: 890,
    colors: ["pink", "blue", "green"],
  },
];

const CollectionsCards = () => {
  return (
    <div className="collections">
      <div className="wrap">
        <Filter type='clothes'/>
        <div className="collections__wrap">
          {initialProducts.map((product) => {
            return <ProductCard key={product.id} info={product} />;
          })}
        </div>
        <div className="collections__load">
          <Button className="button_black button_sm">Load more</Button>
        </div>
      </div>
    </div>
  );
};

export default CollectionsCards;
