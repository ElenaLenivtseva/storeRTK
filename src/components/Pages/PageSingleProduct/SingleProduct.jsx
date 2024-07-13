import React from "react";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import Recommendations from "./Recommendations/Recommendations";
import SingleProductCard from "./SingleProductCard/SingleProductCard";
import WrapStatisticAndReviews from "./WrapStatisticAndReviews/WrapStatisticAndReviews";
import { findAverage } from "../../../utils";
import "./SingleProduct.scss";

const productInfo = {
  id: 1,
  title: "Noir V Neck Wrap Blouse",
  img: [
    "https://img.ltwebstatic.com/images3_pi/2023/07/15/1689355312b07e31dacd0d30b161770bff88f0c3a6_thumbnail_720x_thumbnail_720x.jpg",
  ],
  price: 420,
  materials: ["Cotton 80%", "Poliester 15%", "Elastan 5%"],
  sizes: ["S", "M", "L", "XL"],
  colors: [
    { colorText: "noir", colorCode: "#000", active: true },
    { colorText: "beige", colorCode: "#FFE4B5", active: false },
  ],
  bodyTypes: ["Apple", "Pear"],
  appearanceTypes: ["GR", "RG"],
  colorTypes: ["Cold Winter"],
  note: "Model|Ella is 1.78m tall and wears a size S",
  reviews: [
    {
      id: 1,
      product: "Noir Dress",
      date: "2024-07-04",
      author: "Tyenna",
      // при отправке каждого нового отзыва нужна будет проверка, что оценка от 1 до 5
      rating: 4,
      size: "M",
      color: "Noir",
      title: "Bold and Secure!",
      comment:
        "Love the deep V-neck that always stays in place! It's daring without the worry, perfect for nights out",
    },
    {
      id: 2,
      product: "Noir Dress",
      date: "2024-07-01",
      author: "Mila",
      // при отправке каждого нового отзыва нужна будет проверка, что оценка от 1 до 5
      rating: 5,
      size: "XL",
      color: "Beige",
      title: "It's a compliment magnet!",
      comment:
        "The unique design is so eye-catching! It's my go-to for making an impression",
    },
    {
      id: 3,
      product: "Noir Dress",
      date: "2024-05-04",
      author: "Violla",
      // при отправке каждого нового отзыва нужна будет проверка, что оценка от 1 до 5
      rating: 3,
      size: "S",
      color: "Noir",
      title: "So perect",
      comment:
        "Enchanting evenings call for this dress",
    },
  ],
};

function createCrutchForStars(productInfo) {
  let allRatings = [];
  for (let i = 0; i < productInfo.reviews.length; i++) {
    allRatings.push(productInfo.reviews[i].rating);
  }

  const averageRating = Math.round(allRatings.reduce(findAverage, 0));
  return Array(averageRating).fill(1);
}

const SingleProduct = () => {
  const crutchForStars = createCrutchForStars(productInfo);
  return (
    <div className="singleProduct">
      <Navbar />
      <SingleProductCard
        productInfo={productInfo}
        crutchForStars={crutchForStars}
      />
      <WrapStatisticAndReviews
        productInfo={productInfo}
        crutchForStars={crutchForStars}
      />
      <Recommendations />
      <Footer />
    </div>
  );
};

export default SingleProduct;
