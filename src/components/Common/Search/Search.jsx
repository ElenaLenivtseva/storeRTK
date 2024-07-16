import React from "react";
import { closeIcon } from "../../icons";
import "./Search.scss";
import ProductCard from "../ProductCard/ProductCard";

const searchedProducts = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_DRESS_01_BLACK_01_c8d388da-9477-43ea-a6da-152bc95b14ef.jpg?v=1713974735&width=768&crop=center",
    title: "Midnight Petal A-Line Dress",
    price: 850,
    colors: ["black"],
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_SPIRAL_SANDALS_SUEDE_PEARLS_BEIGE_01.jpg?v=1706568807&width=768&crop=center",
    title: "Chic Ivory Charm Rosebud Heels",
    price: 390,
    colors: ["beige", "blue", "green"],
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/PF23_CROCHET_06_DRESS_BLACK_01.jpg?v=1684431401&width=768&crop=center",
    title: "Twilight Whisper Column Gown",
    price: 890,
    colors: ["black", "blue", "green"],
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_DRESS_01_BLACK_01_c8d388da-9477-43ea-a6da-152bc95b14ef.jpg?v=1713974735&width=768&crop=center",
    title: "Midnight Petal A-Line Dress",
    price: 850,
    colors: ["black"],
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_SPIRAL_SANDALS_SUEDE_PEARLS_BEIGE_01.jpg?v=1706568807&width=768&crop=center",
    title: "Chic Ivory Charm Rosebud Heels",
    price: 390,
    colors: ["beige", "blue", "green"],
  },
  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/PF23_CROCHET_06_DRESS_BLACK_01.jpg?v=1684431401&width=768&crop=center",
    title: "Twilight Whisper Column Gown",
    price: 890,
    colors: ["black", "blue", "green"],
  },
  {
    id: 7,
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_DRESS_01_BLACK_01_c8d388da-9477-43ea-a6da-152bc95b14ef.jpg?v=1713974735&width=768&crop=center",
    title: "Midnight Petal A-Line Dress",
    price: 850,
    colors: ["black"],
  },
  {
    id: 8,
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_SPIRAL_SANDALS_SUEDE_PEARLS_BEIGE_01.jpg?v=1706568807&width=768&crop=center",
    title: "Chic Ivory Charm Rosebud Heels",
    price: 390,
    colors: ["beige", "blue", "green"],
  },
  {
    id: 9,
    img: "https://cdn.shopify.com/s/files/1/0417/4987/2806/products/PF23_CROCHET_06_DRESS_BLACK_01.jpg?v=1684431401&width=768&crop=center",
    title: "Twilight Whisper Column Gown",
    price: 890,
    colors: ["black", "blue", "green"],
  },
];

const Search = () => {
  let result = true;
  return (
    <div className="seacrh">
      <div className="wrap">
        <div className="search__top">
          <p className="logo">AGAINST</p>
          <input
            type="search"
            className="search__input"
            placeholder="Look for a product"
          />
          {closeIcon}
        </div>
        <div className="search__results">
          {result ? (
            <>
              <p className="search__message">
                Searched [{searchedProducts.length}]
              </p>
              <div className="search__productsWrap">
                {searchedProducts.map((item) => {
                  return <ProductCard info={item} key={item.id} />;
                })}
              </div>
            </>
          ) : (
            <>
              <p className="search__message">Sorry, no results</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
