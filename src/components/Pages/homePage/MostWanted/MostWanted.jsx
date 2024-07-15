import React from "react";
import Selection from "../../../Common/Selection/Selection";


const initialMostWantedProducts = [
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
];
const MostWanted = () => {
  return (
    <Selection products={initialMostWantedProducts} title='Most Wanted' link/>
  );
};

export default MostWanted;
