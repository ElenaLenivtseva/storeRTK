import React from "react";
import LinkComp from "../../../Common/LinkComp/LinkComp";
import ProductCard from "../../../Common/ProductCard/ProductCard";
import "./MostWanted.scss";


const initialMostWantedProducts = [
  {
    id: 1,
    img: "data:image/jpeg;base64,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",
    title: "Midnight Petal A-Line Dress",
    price: 850,
    colors: ["black"],
  },
  {
    id: 2,
    img: "https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-white-high-heels-png-image_6700054.png",
    title: "Chic Ivory Charm Rosebud Heels",
    price: 390,
    colors: ["beige", "blue", "green"],
  },
  {
    id: 3,
    img: "https://bellapotemkina.com/wa-data/public/shop/products/51/35/13551/images/29888/29888.970.png",
    title: "Twilight Whisper Column Gown",
    price: 890,
    colors: ["black", "blue", "green"],
  },
];
const MostWanted = () => {
  return (
    <section className="mostWanted">
      <div className="wrap">
        <div className="mostWanted__header">
          <h3 className="subtitle mostWanted__title">Most Wanted</h3>
          <LinkComp>Discover the Full Collection</LinkComp>
        </div>
        <div className="mostWanted__body">
          {initialMostWantedProducts.map((product) => {
            return <ProductCard key={product.id} info={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MostWanted;
