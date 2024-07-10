import React from "react";
import Button from "../../../Common/Button/Button";
import Option from "./Option/Option";
import ProductFeature from "./ProductFeature/ProductFeature";
import "./SingleProductCard.scss";
import { starIcon } from "../../../icons";

const productInfo = {
  id: 1,
  title: "Noir V Neck Wrap Blouse",
  img: [
    "https://img.ltwebstatic.com/images3_pi/2023/07/15/1689355312b07e31dacd0d30b161770bff88f0c3a6_thumbnail_720x_thumbnail_720x.jpg",
  ],
  rating: 5,
  amountOfReviews: 118,
  price: 420,
  materials: ['Cotton 80%', 'Poliester 15%', 'Elastan 5%'],
  sizes: ["S", "M", "L", "XL"],
  colors: [
    { colorText: "noir", colorCode: "#000", active: true },
    { colorText: "beige", colorCode: "#FFE4B5", active: false },
  ],
  bodyTypes: ["Apple", "Pear"],
  appearanceTypes: ["GR", "RG"],
  colorTypes: ["Cold Winter"],
  note: "Model|Ella is 1.78m tall and wears a size S",
};

let crutchForStars = Array(productInfo.rating).fill(1);

const SingleProductCard = () => {
  return (
    <section className="singleProductCard">
      <div className="wrap singleProductCard__wrap">
        <div className="singleProductCard__slider">
          <img
            className="singleProductCard__slide"
            src={productInfo.img[0]}
            alt="dress"
          />
        </div>

        <div className="singleProductCard__info">
          <div className="singleProductCard__top">
            <div className="singleProductCard__header">
              <h3 className="singleProductCard__subtitle">
                {productInfo.title}
              </h3>
              <svg
                className="singleProductCard__like"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div className="singleProductCard__rating">
              <div className="singleProductCard__stars">
                {crutchForStars.map((item, index) => {
                  return <div key={index}>{starIcon}</div>;
                })}
              </div>
              <p className="singleProductCard__amountOfReviews">
                [{productInfo.amountOfReviews} reviews]
              </p>
            </div>
            <p className="singleProductCard__price">${productInfo.price}</p>
          </div>

          <div className="singleProductCard__bottom">
            <Option colors={productInfo.colors} />
            <Option sizes={productInfo.sizes} />

            <div className="singleProductCard__features">
              <ProductFeature
                featureArray={productInfo.materials}
                title="materials"
              />
              <ProductFeature
                featureArray={productInfo.bodyTypes}
                title="bodyTypes"
              />
              <ProductFeature
                featureArray={productInfo.appearanceTypes}
                title="appearanceTypes"
              />
              <ProductFeature
                featureArray={productInfo.colorTypes}
                title="colorTypes"
              />
            </div>
          </div>

          <div className="singleProductCard__amount">
            <p className="singleProductCard__amountButton singleProductCard__minus">
              -
            </p>
            <input
              className="singleProductCard__amountInput"
              type="number"
              min="1"
            />
            <p className="singleProductCard__amountButton singleProductCard__plus">
              +
            </p>
          </div>

          <p className="singleProductCard__note">{productInfo.note}</p>
          <Button className="button_black">Add to Cart</Button>
        </div>
      </div>
    </section>
  );
};

export default SingleProductCard;
